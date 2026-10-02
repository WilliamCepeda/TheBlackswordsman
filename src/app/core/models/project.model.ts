export const PROJECT_SECTIONS = ['intro', 'challenge', 'contribution', 'stack', 'result'] as const;
export type ProjectSection = (typeof PROJECT_SECTIONS)[number];

export interface ProjectStackGroup {
  readonly label: string;
  readonly items: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly roman: string;
  readonly title: string;
  readonly description: string;
  readonly period: string;
  readonly category: string;
  readonly technologies: readonly string[];
  readonly challenge: string;
  readonly role: readonly string[];
  readonly contribution: string;
  readonly responsibilities: readonly string[];
  readonly workflow: readonly string[];
  readonly challenges: readonly string[];
  readonly stack: readonly ProjectStackGroup[];
  readonly result: string;
  readonly outcomes: readonly string[];
}
