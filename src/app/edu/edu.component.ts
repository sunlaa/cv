import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

interface EduItem {
  from: string;
  to: string;
  what: string;
  certificate?: string;
}

@Component({
  selector: 'app-edu',
  standalone: true,
  imports: [TimelineModule],
  templateUrl: './edu.component.html',
  styleUrl: './edu.component.scss',
})
export class EduComponent {
  edu: EduItem[] = [
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
      from: 'January, 2023',
      to: 'October, 2023',
      what: 'Self-study JavaScript',
    },
    {
      from: 'October, 2022',
      to: 'December, 2022',
      what: 'Self-study basic technologies: HTML, CSS',
    },
  ];
}
