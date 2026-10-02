import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SeoService } from '../../core/services/seo.service';
import { PageComponent } from '../../layout/book/page.component';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe, PageComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  readonly competencyGroups = [
    {
      key: 'programming',
      items: ['sql', 'php', 'xml', 'cpp', 'javascript', 'csharp', 'html', 'dotnet', 'python', 'css', 'typescript', 'java', 'android', 'mvc', 'react', 'hibernate', 'rest', 'vue', 'postgresql', 'mongodb', 'kafka', 'mqtt', 'azureServiceBus']
    },
    { key: 'frameworks', items: ['aspNet', 'json', 'angular', 'node', 'spring', 'jsp', 'threeJs'] },
    { key: 'databases', items: ['azure', 'mariaDb', 'mySql'] },
    { key: 'messaging', items: ['rabbitMq', 'emqx', 'amqp'] },
    { key: 'cloud', items: ['azureDevOps'] },
    { key: 'integration', items: ['nodeRed', 'docker'] },
    { key: 'systems', items: ['linux', 'windows'] }
  ];
  readonly languages = ['catalan', 'english', 'spanish'];
  readonly methodology = ['scrum', 'agile'];
  constructor() { inject(SeoService).update('Skills', 'Technologies and areas of expertise.'); }
}
