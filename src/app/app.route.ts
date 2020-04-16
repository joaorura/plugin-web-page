import { Routes } from '@angular/router';

import { PluginHomeComponent } from './plugin-home/plugin-home.component';
import { PluginPartComponent} from './plugin-part/plugin-part.component';

export const ROUTES: Routes = [
  { path: '', component: PluginHomeComponent },
  { path: 'plugin', component: PluginPartComponent },
  { path: 'plugin/:methods', component: PluginPartComponent }
];
