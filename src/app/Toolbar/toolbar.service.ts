import { Injectable } from '@angular/core';

import {ToolbarItem} from "./toolbar-item";
import {ToolbarLoggedOutComponent} from "./toolbar-logged-out/toolbar-logged-out.component";
import {ToolbarLoggedInComponent} from "./toolbar-logged-in/toolbar-logged-in.component";

@Injectable()
export class ToolbarService {
  getAds() {
    return [
      new ToolbarItem(
        ToolbarLoggedOutComponent,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new ToolbarItem(
        ToolbarLoggedInComponent,
        { name: 'Dr IQ', bio: 'Smart as they come' }
      ),
    ];
  }
}
