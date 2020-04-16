import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.route';

import { AppComponent } from './app.component';
import { PluginPartComponent } from './plugin-part/plugin-part.component';
import { CodePartComponent } from './plugin-part/code-part/code-part.component';
import { PluginHomeComponent } from './plugin-home/plugin-home.component';
import {TextPipe} from './plugin-part/text-pipe';

@NgModule({
  declarations: [
    AppComponent,
    PluginPartComponent,
    CodePartComponent,
    PluginHomeComponent,
    TextPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
