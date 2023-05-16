import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDetailsComponent } from './video-details.component';
import { DataAccessModule } from '@social-media/lib/data-access';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DataAccessModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  exports: [VideoDetailsComponent],
  declarations: [VideoDetailsComponent],
})
export class VideoDetailsModule {}
