import { flatten } from "lodash";
import { isAttributeField, isTaskField } from "./fields";
import {
  isComparisonOperator,
  isLogicalOperator,
  LogicalOperator,
} from "./operators";
import { Query, QueryExpression } from "./types";

const RE_PAREN_GROUP = /(\([^\)]+\))/g;
const RE_JOIN_OPERATORS = /(\|\||&&)/g;
const RE_EITHER_PAREN = /[\(\)]/g;
const RE_FIELD = /(meta|key|value|title|description)(!?=)("([^"]+)")/;

export function parse(query: string): Query {
  const q = query
    .trim()
    .split(RE_PAREN_GROUP)
    .map((sub: string) => {
      if (sub.match(RE_PAREN_GROUP)) {
        return [subparse(sub.replace(RE_EITHER_PAREN, ""))];
      } else {
        return subparse(sub);
      }
    });

  return flatten<Query>(q);
}

function subparse(query: string): Array<QueryExpression | LogicalOperator> {
  return query
    .trim()
    .split(RE_JOIN_OPERATORS)
    .filter((x) => x.trim())
    .map(parseExpression);
}

function parseExpression(str: string): QueryExpression | LogicalOperator {
  str = str.trim();

  if (isLogicalOperator(str)) {
    return str;
  }

  const match = RE_FIELD.exec(str);
  if (match) {
    const [, field, operator, , value] = match;

    if (!isAttributeField(field) && !isTaskField(field)) {
      throw new Error(`not an acceptable field: [${field}]`);
    }

    if (!isComparisonOperator(operator)) {
      throw new Error(`not an acceptable comparison operator: [${operator}]`);
    }

    return { field, operator, value };
  }

  throw new Error(`unparsable: [${str}]`);
}
