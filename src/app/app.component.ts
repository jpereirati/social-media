import { Component } from '@angular/core';

@Component({
    selector: 'social-media-root',
    template: `
  <router-outlet></router-outlet>
  <ngx-spinner 
      type="ball-scale-multiple"
      [fullScreen]="true"
      bdColor="rgba(0,0,0,0.9)"
      size="large"></ngx-spinner>
   <notifier-container></notifier-container>
  `,
    styles: [''],
})
export class AppComponent {
    title = 'social-media';
}
