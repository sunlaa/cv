import { Routes } from '@angular/router';
import { SiteComponent } from './site/site.component';
import { PdfComponent } from './pdf/pdf.component';

export const routes: Routes = [
  { path: '', component: SiteComponent },
  { path: 'pdf', component: PdfComponent },
];
