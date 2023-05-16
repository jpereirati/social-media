import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uiAutocompleteOff]',
})
export class AutocompleteOffDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.setAttribute('autocomplete', 'off');
    this.el.nativeElement.setAttribute('autocorrect', 'off');
    this.el.nativeElement.setAttribute('autocapitalize', 'none');
    this.el.nativeElement.setAttribute('spellcheck', 'false');
  }
}
