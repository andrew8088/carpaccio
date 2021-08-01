import faker from "faker";
import { Task, Tags } from "./Task";

export function generateTasks(n: number): Task[] {
  return Array(n).fill(0).map(generateTask);
}

export function generateTask(): Task {
  return {
    id: faker.datatype.number(),
    title: faker.lorem.words(4),
    description: faker.lorem.paragraph(),
    tags: generateTags(),
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

export function generateTags(): Tags {
  const tags: Tags = {};

  const team1 = TEAMS[faker.datatype.number(TEAMS.length - 1)];
  const team2 = TEAMS[faker.datatype.number(TEAMS.length - 1)];
  const state1 = STATES[faker.datatype.number(STATES.length - 1)];
  const state2 = STATES[faker.datatype.number(STATES.length - 1)];

  tags[team1] = state1;
  tags[team2] = state2;

  tags.assignees = [
    faker.name.firstName() + " " + faker.name.lastName(),
    faker.name.firstName() + " " + faker.name.lastName(),
  ];

  return tags;
}
