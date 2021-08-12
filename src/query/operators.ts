import { Predicate } from "./types";
export const comparisonOperators = ["=", "!="];
export type ComparisonOperator = typeof comparisonOperators[number];

export function isComparisonOperator(field: any): field is ComparisonOperator {
  return comparisonOperators.includes(field);
}

type Comparator = (a: string, b: string) => boolean;

const equal: Comparator = (value: string, substring: string) =>
  value.toLowerCase().includes(substring.toLowerCase());

export const comparators: Record<ComparisonOperator, Comparator> = {
  "=": equal,
  "!=": (value: string, substring: string) => !equal(value, substring),
};

export const logicalOperators = ["||", "&&"];
export type LogicalOperator = typeof logicalOperators[number];

export function isLogicalOperator(field: any): field is LogicalOperator {
  return logicalOperators.includes(field);
}

export const logicals: Record<LogicalOperator, any> = {
  "||":
    <T>(a: Predicate<T>, b: Predicate<T>) =>
    (t: T) =>
      a(t) || b(t),
  "&&":
    <T>(a: Predicate<T>, b: Predicate<T>) =>
    (t: T) =>
      a(t) && b(t),
};
