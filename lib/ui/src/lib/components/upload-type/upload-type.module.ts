import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadTypeComponent } from './upload-type.component';
import { DataAccessModule } from '@social-media/lib/data-access';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotifierModule } from 'angular-notifier';

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
    exports: [UploadTypeComponent],
    declarations: [UploadTypeComponent],
})
export class UploadTypeModule { }
