export type SkillCategory = 'frontend' | 'backend' | 'automation' | 'threeD';

export interface Skill {
  readonly name: string;
  readonly category: SkillCategory;
  readonly level: number;
}
