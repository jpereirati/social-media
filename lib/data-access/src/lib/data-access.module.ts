import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from './content';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ContentService, AuthService]
})
export class DataAccessModule {}
