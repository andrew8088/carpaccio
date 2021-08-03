import faker from "faker";
import { Task } from "./Task";
import { Attribute } from "./Attribute";

export function generateTasks(n: number): Task[] {
  return Array(n).fill(0).map(generateTask);
}

export function generateTask(): Task {
  return {
    id: faker.datatype.number(),
    title: faker.lorem.words(4),
    description: faker.lorem.paragraph(),
    attributes: generateAttrs(),
  };
}

const TEAMS = [
  "Team Alpha",
  "Team Beta",
  "Team Gamma",
  "Team Delta",
  "Team Epsilon",
  "People Ops",
  "Marketing",
  "Finance",
];

const STATES = [
  "Inbox",
  "To Do",
  "In Progress",
  "Measuring / Watching",
  "Completed",
];

const name = () => faker.name.firstName() + " " + faker.name.lastName();

export function generateAttrs(): Attribute[] {
  const attrs: Attribute[] = [];

  attrs.push({
    meta: "team",
    key: TEAMS[faker.datatype.number(TEAMS.length - 1)],
    value: STATES[faker.datatype.number(STATES.length - 1)],
  });

  attrs.push({
    meta: "team",
    key: TEAMS[faker.datatype.number(TEAMS.length - 1)],
    value: STATES[faker.datatype.number(STATES.length - 1)],
  });

  attrs.push({
    meta: "assignee",
    key: name(),
    value: "product",
  });
  attrs.push({
    meta: "assignee",
    key: name(),
    value: "design",
  });
  attrs.push({
    meta: "assignee",
    key: name(),
    value: "eng",
  });

  return attrs;
}
