import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './features.routes';
import { VideoComponent } from './components/video/video.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './container/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDividerModule } from '@angular/material/divider';
import { UiModule, VideoDetailsModule } from '@social-media/lib/ui';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,
    UiModule,
    MatSnackBarModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    VideoDetailsModule,
    MatDividerModule,
    MatDialogModule,
    NgxPaginationModule,
  ],
  declarations: [HomeComponent, VideoComponent],
})
export class FeaturesModule {}
