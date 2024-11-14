import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { ProgressBarModule } from 'primeng/progressbar';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

interface Skill {
  skill: string;
  value: number;
}

interface EduItem {
  from: string;
  to: string;
  what: string;
  certificate?: string;
}

interface ExpItem {
  from: string;
  to: string;
  what: string;
  desc: string;
  link: string;
  src: string;
}

@Component({
  selector: 'app-pdf',
  standalone: true,
  imports: [ProgressBarModule, TimelineModule, DividerModule, ButtonModule],
  templateUrl: './pdf.component.html',
  styleUrl: './pdf.component.scss',
})
export class PdfComponent {
  skills: Skill[] = [
    { skill: 'Angular', value: 85 },
    { skill: 'RxJS', value: 70 },
    { skill: 'NgRx', value: 70 },
    { skill: 'JavaScript', value: 98 },
    { skill: 'TypeScript', value: 95 },
    { skill: 'HTML', value: 98 },
    { skill: 'CSS (SASS/SCSS)', value: 98 },
    { skill: 'Jest', value: 40 },
    { skill: 'Node.js', value: 30 },
  ];

  edu: EduItem[] = [
    {
      from: 'October, 2024',
      to: 'Current time',
      what: 'Learning Node.js through the Rolling Scope School program',
    },
    {
      from: 'July, 2024',
      to: 'September, 2024',
      what: 'Angular Course by Rolling Scope School',
      certificate: 'https://app.rs.school/certificate/fpy2hcb9',
    },
    {
      from: 'November, 2023',
      to: 'June, 2024',
      what: 'JavaScript / Front-end Course by Rolling Scope School',
      certificate: 'https://app.rs.school/certificate/rd5ixhxj',
    },
    {
      from: 'October, 2022',
      to: 'October, 2023',
      what: 'Self-study JavaScript, HTML, CSS',
    },
  ];

  exp: ExpItem[] = [
    {
      from: 'August, 2024',
      to: 'September, 2024',
      what: 'Train ticket booking application "Chamomile Express"',
      desc: `
      <p>Train ticket sales application developed as part of the final project of the training course. The application was developed in a team using SCRUM methodology.</p>
      <ul class="list">
        <h4>Main features:</h4>
        <li><i>User authentication and account management</i></li>
        <li><i>Train ticket booking system with search and seat selection</i></li>
        <li><i>Admin panel for managing stations, routes, and schedules</i></li>
        <li><i>RESTful API integration for frontend-backend communication</i></li>
      </ul>

      <p><b>Tech stack:</b> Angular, RxJx, NgRX, PrimeNG, Jest</p>
      `,
      src: 'train.png',
      link: 'https://train-app.netlify.app/',
    },
    {
      from: 'May, 2024',
      to: 'June, 2024',
      what: 'E-commerce application "Echoes of vinyl"',
      desc: `
      <p>E-commerce application for selling vinyl records and players. The application was developed in a team of 3 people using SCRUM methodology and Jira task tracking tool. Was also executed as a final project for the course.</p>
      <ul class="list">
        <h4>Main features:</h4>
        <li><i>User authentication with secure access token handling</i></li>
        <li><i>Product catalog with advanced filters</i></li>
        <li><i>Shopping cart for managing selected items</i></li>
        <li><i>Integration with commercetools platform for e-commerce functionality</i></li>
      </ul>
      <p><b>Tech stack:</b> TypeScript, Webpack, SASS, ESLint, Husky, Jest</p>
      `,
      src: 'e-commerce.png',
      link: 'https://echoes-of-vinyl.netlify.app/',
    },
  ];
}
