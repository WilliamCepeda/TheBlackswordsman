import { Skill } from '../core/models/skill.model';

export const SKILLS: readonly Skill[] = [
  { name: 'Angular', category: 'frontend', level: 90 },
  { name: 'TypeScript', category: 'frontend', level: 92 },
  { name: 'SCSS', category: 'frontend', level: 82 },
  { name: 'Node.js', category: 'backend', level: 78 },
  { name: 'SQL', category: 'backend', level: 76 },
  { name: 'Docker', category: 'backend', level: 72 },
  { name: 'OPC UA', category: 'automation', level: 86 },
  { name: 'PLC', category: 'automation', level: 84 },
  { name: 'MQTT', category: 'automation', level: 80 },
  { name: 'Three.js', category: 'threeD', level: 82 },
  { name: 'WebGL', category: 'threeD', level: 70 },
  { name: 'Digital Twins', category: 'threeD', level: 88 }
];