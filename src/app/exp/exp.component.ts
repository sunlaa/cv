import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { TimelineModule } from 'primeng/timeline';

interface ExpItem {
  from: string;
  to: string;
  what: string;
  desc: string;
  link: string;
  src?: string;
  tech?: string[];
}

@Component({
  selector: 'app-exp',
  standalone: true,
  imports: [TimelineModule, DividerModule],
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.scss',
})
export class ExpComponent {
  exp: ExpItem[];

  constructor() {
    this.exp = [
      {
        from: 'August, 2024',
        to: 'September, 2024',
        what: 'Train ticket booking application "Chamomile Express"',
        desc: 'Train ticket booking application, with authorization feature and management of schedules, car types, stations and trips for administrative access.',
        src: 'train.png',
        link: 'https://train-app.netlify.app/',
        tech: ['angular', 'rxjs', 'ngrx', 'primeng', 'jest'],
      },
      {
        from: 'May, 2024',
        to: 'June, 2024',

        what: 'E-commerce application "Echoes of vinyl"',
        desc: 'The application was developed by a team using the SCRUM methodology and Jira for task tracking, without the use of external libraries.',
        src: 'e-commerce.png',
        link: 'https://echoes-of-vinyl.netlify.app/',
        tech: ['ts', 'wb', 'sass', 'eslint', 'husky', 'jest'],
      },

      {
        from: 'November, 2023',
        to: 'June, 2024',
        what: 'Rolling Scope School course projects',
        desc: 'To all projects',
        link: '#projects',
      },
    ];
  }
}
