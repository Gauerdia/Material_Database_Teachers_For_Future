import { Injectable } from '@angular/core';
import {InternItem} from "./intern-item";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {PrivateSearchPageComponent} from "./private-search-page/private-search-page.component";
import {NewMaterialPageComponent} from "./new-material-page/new-material-page.component";
import {ApproveMemberPageComponent} from "./approve-member-page/approve-member-page.component";
import {ApproveMaterialPageComponent} from "./approve-material-page/approve-material-page.component";

@Injectable()
export class InternService {
  getComponents() {
    return [
      new InternItem(
        ProfilePageComponent,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new InternItem(
        PrivateSearchPageComponent,
        { name: 'Dr IQ', bio: 'Smart as they come' }
      ),
      new InternItem(
        NewMaterialPageComponent,
        { name: 'Dr IQ', bio: 'Smart as they come' }
      ),
      new InternItem(
        ApproveMemberPageComponent,
        { name: 'Dr IQ', bio: 'Smart as they come' }
      ),
      new InternItem(
        ApproveMaterialPageComponent,
        { name: 'Dr IQ', bio: 'Smart as they come' }
      ),
    ];
  }
}
