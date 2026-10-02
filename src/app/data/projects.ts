import { Project } from '../core/models/project.model';

const projectKey = (id: string, key: string): string => `projects.items.${id}.${key}`;

export const PROJECTS: readonly Project[] = [
  {
    id: 'real-time-industrial-platform', roman: 'I',
    title: projectKey('realTimeIndustrialPlatform', 'title'),
    description: projectKey('realTimeIndustrialPlatform', 'description'),
    period: projectKey('realTimeIndustrialPlatform', 'period'),
    category: projectKey('realTimeIndustrialPlatform', 'category'),
    technologies: ['Node.js', 'TypeScript', 'Angular', 'Fastify', 'WebSocket', 'Azure Event Bus', 'MongoDB', 'Azure Web Services'],
    challenge: projectKey('realTimeIndustrialPlatform', 'challenge'),
    role: [projectKey('realTimeIndustrialPlatform', 'role.backend'), projectKey('realTimeIndustrialPlatform', 'role.architecture'), projectKey('realTimeIndustrialPlatform', 'role.frontend'), projectKey('realTimeIndustrialPlatform', 'role.integration')],
    contribution: projectKey('realTimeIndustrialPlatform', 'contribution'),
    responsibilities: [projectKey('realTimeIndustrialPlatform', 'responsibilities.api'), projectKey('realTimeIndustrialPlatform', 'responsibilities.architecture'), projectKey('realTimeIndustrialPlatform', 'responsibilities.realtime'), projectKey('realTimeIndustrialPlatform', 'responsibilities.frontend'), projectKey('realTimeIndustrialPlatform', 'responsibilities.renderer'), projectKey('realTimeIndustrialPlatform', 'responsibilities.cloud')],
    workflow: [projectKey('realTimeIndustrialPlatform', 'workflow.plc'), projectKey('realTimeIndustrialPlatform', 'workflow.events'), projectKey('realTimeIndustrialPlatform', 'workflow.backend'), projectKey('realTimeIndustrialPlatform', 'workflow.frontend')],
    challenges: [projectKey('realTimeIndustrialPlatform', 'challenges.realtime'), projectKey('realTimeIndustrialPlatform', 'challenges.architecture'), projectKey('realTimeIndustrialPlatform', 'challenges.configurability'), projectKey('realTimeIndustrialPlatform', 'challenges.delivery')],
    stack: [
      { label: projectKey('realTimeIndustrialPlatform', 'stack.backend'), items: ['Node.js', 'TypeScript', 'Fastify', 'WebSocket', 'MongoDB'] },
      { label: projectKey('realTimeIndustrialPlatform', 'stack.frontend'), items: ['Angular', 'TypeScript', 'SVG', 'JSON configuration'] },
      { label: projectKey('realTimeIndustrialPlatform', 'stack.cloud'), items: ['Azure Event Bus', 'Azure Web Services', 'Production pipelines'] }
    ],
    result: projectKey('realTimeIndustrialPlatform', 'result'),
    outcomes: [projectKey('realTimeIndustrialPlatform', 'outcomes.monitoring'), projectKey('realTimeIndustrialPlatform', 'outcomes.screens'), projectKey('realTimeIndustrialPlatform', 'outcomes.delivery')]
  },
  {
    id: 'interactive-3d-engineering-tool', roman: 'II',
    title: projectKey('interactive3dEngineeringTool', 'title'),
    description: projectKey('interactive3dEngineeringTool', 'description'),
    period: projectKey('interactive3dEngineeringTool', 'period'),
    category: projectKey('interactive3dEngineeringTool', 'category'),
    technologies: ['Node.js', 'TypeScript', 'Angular', 'Electron', 'KNX', 'Fastify', 'WebSocket'],
    challenge: projectKey('interactive3dEngineeringTool', 'challenge'),
    role: [projectKey('interactive3dEngineeringTool', 'role.backend'), projectKey('interactive3dEngineeringTool', 'role.frontend'), projectKey('interactive3dEngineeringTool', 'role.desktop'), projectKey('interactive3dEngineeringTool', 'role.architecture')],
    contribution: projectKey('interactive3dEngineeringTool', 'contribution'),
    responsibilities: [projectKey('interactive3dEngineeringTool', 'responsibilities.architecture'), projectKey('interactive3dEngineeringTool', 'responsibilities.backend'), projectKey('interactive3dEngineeringTool', 'responsibilities.frontend'), projectKey('interactive3dEngineeringTool', 'responsibilities.electron')],
    workflow: [projectKey('interactive3dEngineeringTool', 'workflow.knx'), projectKey('interactive3dEngineeringTool', 'workflow.backend'), projectKey('interactive3dEngineeringTool', 'workflow.frontend'), projectKey('interactive3dEngineeringTool', 'workflow.electron')],
    challenges: [projectKey('interactive3dEngineeringTool', 'challenges.architecture'), projectKey('interactive3dEngineeringTool', 'challenges.reactivity'), projectKey('interactive3dEngineeringTool', 'challenges.desktop'), projectKey('interactive3dEngineeringTool', 'challenges.delivery')],
    stack: [
      { label: projectKey('interactive3dEngineeringTool', 'stack.backend'), items: ['Node.js', 'TypeScript', 'Fastify', 'WebSocket'] },
      { label: projectKey('interactive3dEngineeringTool', 'stack.frontend'), items: ['Angular', 'TypeScript', 'Signals', 'Components'] },
      { label: projectKey('interactive3dEngineeringTool', 'stack.desktop'), items: ['Electron', 'IPC', 'JSON repositories', 'EXE pipelines'] }
    ],
    result: projectKey('interactive3dEngineeringTool', 'result'),
    outcomes: [projectKey('interactive3dEngineeringTool', 'outcomes.backend'), projectKey('interactive3dEngineeringTool', 'outcomes.frontend'), projectKey('interactive3dEngineeringTool', 'outcomes.desktop')]
  },
  {
    id: 'robotic-chess', roman: 'III',
    title: projectKey('roboticChess', 'title'),
    description: projectKey('roboticChess', 'description'),
    period: projectKey('roboticChess', 'period'),
    category: projectKey('roboticChess', 'category'),
    technologies: ['Python', 'Universal Robots', 'TCP/IP'],
    challenge: projectKey('roboticChess', 'challenge'),
    role: [projectKey('roboticChess', 'role.design'), projectKey('roboticChess', 'role.python'), projectKey('roboticChess', 'role.robotics')],
    contribution: projectKey('roboticChess', 'contribution'),
    responsibilities: [projectKey('roboticChess', 'responsibilities.chess'), projectKey('roboticChess', 'responsibilities.interface'), projectKey('roboticChess', 'responsibilities.communication'), projectKey('roboticChess', 'responsibilities.calibration')],
    workflow: [projectKey('roboticChess', 'workflow.move'), projectKey('roboticChess', 'workflow.rules'), projectKey('roboticChess', 'workflow.coordinates'), projectKey('roboticChess', 'workflow.movement')],
    challenges: [projectKey('roboticChess', 'challenges.calibration'), projectKey('roboticChess', 'challenges.safety'), projectKey('roboticChess', 'challenges.coordinates'), projectKey('roboticChess', 'challenges.synchronization')],
    stack: [
      { label: projectKey('roboticChess', 'stack.software'), items: ['Python', 'GUI', 'Chess logic'] },
      { label: projectKey('roboticChess', 'stack.robotics'), items: ['Universal Robots', 'URScript'] },
      { label: projectKey('roboticChess', 'stack.communication'), items: ['TCP/IP', 'Sockets'] }
    ],
    result: projectKey('roboticChess', 'result'),
    outcomes: [projectKey('roboticChess', 'outcomes.integration'), projectKey('roboticChess', 'outcomes.movements'), projectKey('roboticChess', 'outcomes.learning')]
  },
  {
    id: 'unity-2d-game', roman: 'IV',
    title: projectKey('unity2dGame', 'title'),
    description: projectKey('unity2dGame', 'description'),
    period: projectKey('unity2dGame', 'period'),
    category: projectKey('unity2dGame', 'category'),
    technologies: ['Unity', 'C#', '2D', 'Sprites', 'Animation'],
    challenge: projectKey('unity2dGame', 'challenge'),
    role: [projectKey('unity2dGame', 'role.development'), projectKey('unity2dGame', 'role.gameplay'), projectKey('unity2dGame', 'role.artIntegration')],
    contribution: projectKey('unity2dGame', 'contribution'),
    responsibilities: [projectKey('unity2dGame', 'responsibilities.gameplay'), projectKey('unity2dGame', 'responsibilities.sprites'), projectKey('unity2dGame', 'responsibilities.animation'), projectKey('unity2dGame', 'responsibilities.scenes')],
    workflow: [projectKey('unity2dGame', 'workflow.assets'), projectKey('unity2dGame', 'workflow.movement'), projectKey('unity2dGame', 'workflow.scenes'), projectKey('unity2dGame', 'workflow.gameplay')],
    challenges: [projectKey('unity2dGame', 'challenges.gameFeel'), projectKey('unity2dGame', 'challenges.consistency'), projectKey('unity2dGame', 'challenges.organization'), projectKey('unity2dGame', 'challenges.integration')],
    stack: [
      { label: projectKey('unity2dGame', 'stack.engine'), items: ['Unity', 'C#'] },
      { label: projectKey('unity2dGame', 'stack.visuals'), items: ['Sprites', 'Animations', 'Backgrounds'] },
      { label: projectKey('unity2dGame', 'stack.gameplay'), items: ['Movement', 'Scenes', 'Game logic'] }
    ],
    result: projectKey('unity2dGame', 'result'),
    outcomes: [projectKey('unity2dGame', 'outcomes.gameplay'), projectKey('unity2dGame', 'outcomes.assets'), projectKey('unity2dGame', 'outcomes.unity')]
  },
  {
    id: 'unity-3d-shooter', roman: 'V',
    title: projectKey('unity3dShooter', 'title'),
    description: projectKey('unity3dShooter', 'description'),
    period: projectKey('unity3dShooter', 'period'),
    category: projectKey('unity3dShooter', 'category'),
    technologies: ['Unity', 'C#', '3D', 'Shooter', 'Physics'],
    challenge: projectKey('unity3dShooter', 'challenge'),
    role: [projectKey('unity3dShooter', 'role.development'), projectKey('unity3dShooter', 'role.gameplay'), projectKey('unity3dShooter', 'role.worldBuilding')],
    contribution: projectKey('unity3dShooter', 'contribution'),
    responsibilities: [projectKey('unity3dShooter', 'responsibilities.shooter'), projectKey('unity3dShooter', 'responsibilities.movement'), projectKey('unity3dShooter', 'responsibilities.scenes'), projectKey('unity3dShooter', 'responsibilities.animation')],
    workflow: [projectKey('unity3dShooter', 'workflow.environment'), projectKey('unity3dShooter', 'workflow.player'), projectKey('unity3dShooter', 'workflow.combat'), projectKey('unity3dShooter', 'workflow.scenes')],
    challenges: [projectKey('unity3dShooter', 'challenges.camera'), projectKey('unity3dShooter', 'challenges.physics'), projectKey('unity3dShooter', 'challenges.pacing'), projectKey('unity3dShooter', 'challenges.integration')],
    stack: [
      { label: projectKey('unity3dShooter', 'stack.engine'), items: ['Unity', 'C#'] },
      { label: projectKey('unity3dShooter', 'stack.world'), items: ['3D environments', 'Scenes', 'Lighting'] },
      { label: projectKey('unity3dShooter', 'stack.gameplay'), items: ['Shooter mechanics', 'Physics', 'Animation'] }
    ],
    result: projectKey('unity3dShooter', 'result'),
    outcomes: [projectKey('unity3dShooter', 'outcomes.gameplay'), projectKey('unity3dShooter', 'outcomes.world'), projectKey('unity3dShooter', 'outcomes.unity')]
  },
  {
    id: 'yaya-recipes', roman: 'VI',
    title: projectKey('yayaRecipes', 'title'),
    description: projectKey('yayaRecipes', 'description'),
    period: projectKey('yayaRecipes', 'period'),
    category: projectKey('yayaRecipes', 'category'),
    technologies: ['React Native', 'Java', 'Spring Boot', 'Hibernate', 'REST API'],
    challenge: projectKey('yayaRecipes', 'challenge'),
    role: [projectKey('yayaRecipes', 'role.fullStack'), projectKey('yayaRecipes', 'role.frontend'), projectKey('yayaRecipes', 'role.backend'), projectKey('yayaRecipes', 'role.database')],
    contribution: projectKey('yayaRecipes', 'contribution'),
    responsibilities: [projectKey('yayaRecipes', 'responsibilities.frontend'), projectKey('yayaRecipes', 'responsibilities.api'), projectKey('yayaRecipes', 'responsibilities.endpoints'), projectKey('yayaRecipes', 'responsibilities.persistence')],
    workflow: [projectKey('yayaRecipes', 'workflow.mobile'), projectKey('yayaRecipes', 'workflow.api'), projectKey('yayaRecipes', 'workflow.backend'), projectKey('yayaRecipes', 'workflow.database')],
    challenges: [projectKey('yayaRecipes', 'challenges.mobile'), projectKey('yayaRecipes', 'challenges.communication'), projectKey('yayaRecipes', 'challenges.model'), projectKey('yayaRecipes', 'challenges.integration')],
    stack: [
      { label: projectKey('yayaRecipes', 'stack.frontend'), items: ['React Native', 'JavaScript'] },
      { label: projectKey('yayaRecipes', 'stack.backend'), items: ['Java', 'Spring Boot', 'REST API'] },
      { label: projectKey('yayaRecipes', 'stack.persistence'), items: ['Hibernate', 'Entity annotations', 'Database'] }
    ],
    result: projectKey('yayaRecipes', 'result'),
    outcomes: [projectKey('yayaRecipes', 'outcomes.fullStack'), projectKey('yayaRecipes', 'outcomes.api'), projectKey('yayaRecipes', 'outcomes.persistence')]
  }
];
