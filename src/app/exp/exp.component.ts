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
        desc: `
        <p>Train ticket booking application with appropriate functionality, authorization features, and management of schedules, car types, stations and trips for administrative access.</p>
        <div class="background-info">
          <p><b>Admin credentials:</b></p>
          <p>Login: admin@admin.com</p>
          <p>Password: my-password</p>
        </div>
        `,
        src: 'train.png',
        link: 'https://train-app.netlify.app/',
        tech: ['angular', 'rxjs', 'ngrx', 'primeng', 'jest'],
      },
      {
        from: 'May, 2024',
        to: 'June, 2024',
        what: 'E-commerce application "Echoes of vinyl"',
        desc: `
        <p>E-commerce app for selling vinyl records and record players. The application was developed in a <b>team</b> using SCRUM methodology and Jira task tracking tools. The <b>commercetools</b> platform was used as API. No third-party libraries were used.</p>`,
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
