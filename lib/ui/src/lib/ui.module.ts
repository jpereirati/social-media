import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives';


@NgModule({
  imports: [CommonModule],
  exports: [DirectivesModule],
})
export class UiModule {}
