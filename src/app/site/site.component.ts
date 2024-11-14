import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { HeaderComponent } from '../header/header.component';
import { EduComponent } from '../edu/edu.component';
import { ExpComponent } from '../exp/exp.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [
    MainComponent,
    HeaderComponent,
    EduComponent,
    ExpComponent,
    ProjectsComponent,
  ],
  templateUrl: './site.component.html',
  styleUrl: './site.component.scss',
})
export class SiteComponent {}
