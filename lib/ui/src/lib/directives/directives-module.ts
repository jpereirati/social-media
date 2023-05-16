import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteOffDirective } from './autocomplete-off.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AutocompleteOffDirective],
  exports: [AutocompleteOffDirective],
})
export class DirectivesModule {}
