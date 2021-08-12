import { Task } from "../Task";
import { isAttributeField, isTaskField } from "./fields";
import { comparators, logicals } from "./operators";
import { Query, isQueryExpression, QueryExpression } from "./types";

function getExpressionPredicate(ex: QueryExpression) {
  const { field, operator, value } = ex;

  if (isTaskField(field)) {
    return (task: Task) => comparators[operator](task[field], value);
  }

  if (isAttributeField(field)) {
    return (task: Task) => {
      for (const attr of task.attributes) {
        if (comparators[operator](attr[field] || "", value)) {
          return true;
        }
      }
      return false;
    };
  }
}

export function predicate(query: Query): any {
  if (query.length === 0) return [];

  const [element, ...rest] = query;

  if (isQueryExpression(element)) {
    return [getExpressionPredicate(element)].concat(predicate(rest));
  }

  if (Array.isArray(element)) {
    return predicate(element);
  }

  return logicals[element];
}
