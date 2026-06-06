import { corporateProjects } from "./corporate";
import { retailProjects } from "./retail";
import { hospitalityProjects } from "./hospitality";

export const allProjects = [
  ...corporateProjects,
  ...retailProjects,
  ...hospitalityProjects,
];