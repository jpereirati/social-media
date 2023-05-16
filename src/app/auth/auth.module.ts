import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './auth.routes';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './container/auth.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, MatSnackBarModule, FormsModule, ReactiveFormsModule],
  declarations: [AuthComponent],
})
export class AuthModule {}
