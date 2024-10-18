import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProgressBarModule],

  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
