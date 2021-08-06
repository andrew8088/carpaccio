import { TaskField, AttributeField } from "./fields";
import { ComparisonOperator, LogicalOperator } from "./operators";

export type QueryExpression = {
  field: TaskField | AttributeField;
  operator: ComparisonOperator;
  value: string;
};

export type QueryElements = Query | QueryExpression | LogicalOperator;

export type Query = Array<QueryElements>;
