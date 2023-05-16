import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DataAccessModule } from '@social-media/lib/data-access';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataAccessModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    {
      provide: 'appStorage',
      useValue: environment.storage,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
