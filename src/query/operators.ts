import { Brand } from "../utils";

export const comparisonOperators = ["=", "!="];
export type ComparisonOperator = Brand<
  typeof comparisonOperators[number],
  "ComparisonOperator"
>;

export function isComparisonOperator(field: any): field is ComparisonOperator {
  return comparisonOperators.includes(field);
}

export const logicalOperators = ["||", "&&"];
export type LogicalOperator = Brand<
  typeof logicalOperators[number],
  "LogicalOperator"
>;

export function isLogicalOperator(field: any): field is LogicalOperator {
  return logicalOperators.includes(field);
}
