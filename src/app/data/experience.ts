import { Experience } from '../core/models/experience.model';

export const EXPERIENCES: readonly Experience[] = [
  { companyKey: 'experience.items.middleDegree.company', periodKey: 'experience.items.middleDegree.period', roleKey: 'experience.items.middleDegree.role', summaryKey: 'experience.items.middleDegree.summary', detailKeys: [] },
  { companyKey: 'experience.items.internship.company', periodKey: 'experience.items.internship.period', roleKey: 'experience.items.internship.role', detailKeys: ['experience.items.internship.details.installation', 'experience.items.internship.details.diagnostics', 'experience.items.internship.details.support', 'experience.items.internship.details.documentation', 'experience.items.internship.details.zabbix', 'experience.items.internship.details.ansible'] },
  { companyKey: 'experience.items.higherDegree.company', periodKey: 'experience.items.higherDegree.period', roleKey: 'experience.items.higherDegree.role', detailKeys: ['experience.items.higherDegree.details.reactNative', 'experience.items.higherDegree.details.android', 'experience.items.higherDegree.details.spring', 'experience.items.higherDegree.details.database', 'experience.items.higherDegree.details.patterns', 'experience.items.higherDegree.details.odoo', 'experience.items.higherDegree.details.unity', 'experience.items.higherDegree.details.chess', 'experience.items.higherDegree.details.robots', 'experience.items.higherDegree.details.integration'] },
  {
    companyKey: 'experience.items.current.company',
    periodKey: 'experience.items.current.period',
    roleKey: 'experience.items.current.role',
    summaryKey: 'experience.items.current.summary',
    detailKeys: [
      'experience.items.current.details.architecture',
      'experience.items.current.details.backend',
      'experience.items.current.details.apiContracts',
      'experience.items.current.details.eventDriven',
      'experience.items.current.details.websockets',
      'experience.items.current.details.frontend',
      'experience.items.current.details.three',
      'experience.items.current.details.industrial',
      'experience.items.current.details.nodeRed',
      'experience.items.current.details.mqtt',
      'experience.items.current.details.security',
      'experience.items.current.details.testing',
      'experience.items.current.details.cicd',
      'experience.items.current.details.azure',
      'experience.items.current.details.docker',
      'experience.items.current.details.cpp',
      'experience.items.current.details.languages',
      'experience.items.current.details.integration',
      'experience.items.current.details.decisions',
      'experience.items.current.details.coordination',
      'experience.items.current.details.mongodb'
    ]
  },
  {
    companyKey: 'experience.items.informaticsDegree.company',
    periodKey: 'experience.items.informaticsDegree.period',
    roleKey: 'experience.items.informaticsDegree.role',
    detailKeys: []
  }
];
