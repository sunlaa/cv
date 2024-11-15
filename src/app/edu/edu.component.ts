import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { ProgressBarModule } from 'primeng/progressbar';
import { DividerModule } from 'primeng/divider';

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

@Component({
  selector: 'app-edu',
  standalone: true,
  imports: [TimelineModule, ProgressBarModule, DividerModule],
  templateUrl: './edu.component.html',
  styleUrl: './edu.component.scss',
})
export class EduComponent {
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

  skills: Skill[] = [
    { skill: 'Angular', value: 85 },
    { skill: 'JavaScript', value: 98 },
    { skill: 'TypeScript', value: 95 },
    { skill: 'RxJS', value: 70 },
    { skill: 'NgRx', value: 70 },
    { skill: 'HTML', value: 98 },
    { skill: 'CSS (SASS/SCSS)', value: 98 },
    { skill: 'Jest', value: 40 },
    { skill: 'Node.js', value: 30 },
  ];
}
