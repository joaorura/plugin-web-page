import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.route';

import { AppComponent } from './app.component';
import { PluginPartComponent } from './plugin-part/plugin-part.component';
import { PluginHomeComponent } from './plugin-home/plugin-home.component';
import { HighlightModule } from 'ngx-highlightjs';

export function getHighlightLanguages() {
  return {
    java: () => import('../../node_modules/highlight.js/lib/languages/java')
  };
}

@NgModule({
  declarations: [
    AppComponent,
    PluginPartComponent,
    PluginHomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    HighlightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
