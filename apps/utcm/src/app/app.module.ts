import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClientUtcmAuthDataAccessModule } from '@user-trace/client/utcm/auth/data-access';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ClientUtcmAuthDataAccessModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
