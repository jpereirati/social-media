import { Routes } from '@angular/router';
import { VideoComponent } from './components/video/video.component';
import { HomeComponent } from './container/home/home.component';

export const routes: Routes = [
  { path: 'video', component: VideoComponent },
  { path: '', component: HomeComponent },
];

