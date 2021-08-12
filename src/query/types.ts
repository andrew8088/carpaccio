import {
  TaskField,
  AttributeField,
  isAttributeField,
  isTaskField,
} from "./fields";
import {
  ComparisonOperator,
  isComparisonOperator,
  LogicalOperator,
} from "./operators";

export type Query = Array<QueryElement>;

export type QueryElement = Query | QueryExpression | LogicalOperator;

export type QueryExpression = {
  field: TaskField | AttributeField;
  operator: ComparisonOperator;
  value: string;
};

export function isQueryExpression(obj: any): obj is QueryExpression {
  const { field, operator, value } = obj;

  if (!isAttributeField(field) && !isTaskField(field)) return false;
  if (!isComparisonOperator(operator)) return false;
  if (typeof value !== "string") return false;

  return true;
}

export type Predicate<T> = (t: T) => boolean;
