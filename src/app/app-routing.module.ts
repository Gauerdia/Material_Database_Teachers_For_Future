import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./public/home-page/home-page.component";
import {RegisterPageComponent} from "./public/register-page/register-page.component";
import {LogInPageComponent} from "./public/log-in-page/log-in-page.component";
import {PublicSearchPageComponent} from "./public/public-search-page/public-search-page.component";
import {InternLoaderComponent} from "./intern/internLoader.component";
import {PublicDetailPageComponent} from "./public/public-detail-page/public-detail-page.component";
import {PrivateDetailPageComponent} from "./intern/private-detail-page/private-detail-page.component";
import {LogOutPageComponent} from "./public/log-out-page/log-out-page.component";
import {ImpressumComponent} from "./public/impressum/impressum.component";
import {DatenschutzComponent} from "./public/datenschutz/datenschutz.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'logIn',
    component: LogInPageComponent
  },
  {
    path: 'logOut',
    component: LogOutPageComponent
  },
  {
    path: 'publicSearch',
    component: PublicSearchPageComponent
  },
  {
    path: 'intern',
    component: InternLoaderComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent
  },
  {
    path: 'detailPage/:id', component:PublicDetailPageComponent
  },
  {
    path: 'detailPageAdvanced/:id', component:PrivateDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
