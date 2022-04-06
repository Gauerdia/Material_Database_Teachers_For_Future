import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {AdBannerComponent} from "./Ads/ad-banner.component";
import {HeroJobAdComponent} from "./Ads/hero-job.ad.component";
import {HeroProfileComponent} from "./Ads/hero-profile.component";
import {AdDirective} from "./Ads/ad.directive";
import {AppRoutingModule} from "./app-routing.module";
import {AdService} from "./Ads/ad.service";

import {ToolbarLoaderComponent} from "./Toolbar/toolbarLoader.component";
import {ToolbarDirective} from "./Toolbar/toolbar.directive";
import {ToolbarService} from "./Toolbar/toolbar.service";
import {FooterComponent} from "./footer/footer.component";
import { HomePageComponent } from './public/home-page/home-page.component';
import { PublicSearchPageComponent } from './public/public-search-page/public-search-page.component';
import { RegisterPageComponent } from './public/register-page/register-page.component';
import { LogInPageComponent } from './public/log-in-page/log-in-page.component';
import { InternPageComponent } from './intern/intern-page/intern-page.component';
import {ToolbarLoggedOutComponent} from "./Toolbar/toolbar-logged-out/toolbar-logged-out.component";
import {ToolbarLoggedInComponent} from "./Toolbar/toolbar-logged-in/toolbar-logged-in.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {CrudService} from "./services/crud.service";
import {AuthService} from "./services/auth.services";
import { PrivateSearchPageComponent } from './intern/private-search-page/private-search-page.component';
import { ProfilePageComponent } from './intern/profile-page/profile-page.component';
import {NewMaterialPageComponent} from './intern/new-material-page/new-material-page.component';
import { ApproveMemberPageComponent } from './intern/approve-member-page/approve-member-page.component';
import { ApproveMaterialPageComponent } from './intern/approve-material-page/approve-material-page.component';
import {InternLoaderComponent} from "./intern/internLoader.component";
import {InternDirective} from "./intern/intern.directive";
import {InternService} from "./intern/intern.service";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import { PrivateDetailPageComponent } from './intern/private-detail-page/private-detail-page.component';
import { PublicDetailPageComponent } from './public/public-detail-page/public-detail-page.component';
import { PublicDetailGeneralInformationComponent } from './public/public-detail-page/public-detail-general-information/public-detail-general-information.component';
import { PublicDetailCommentsComponent } from './public/public-detail-page/public-detail-comments/public-detail-comments.component';
import { PublicDetailContactComponent } from './public/public-detail-page/public-detail-contact/public-detail-contact.component';
import {PublicDetailService} from "./public/public-detail-page/public-detail.service";
import {PublicDetailDirective} from "./public/public-detail-page/public-detail.directive";
import {PrivateDetailCommentsComponent} from "./intern/private-detail-page/private-detail-comments/private-detail-comments.component";
import {PrivateDetailContactComponent} from "./intern/private-detail-page/private-detail-contact/private-detail-contact.component";
import {PrivateDetailGeneralInformationComponent} from "./intern/private-detail-page/private-detail-general-information/private-detail-general-information.component";
import {PrivateDetailService} from "./intern/private-detail-page/private-detail.service";
import {PrivateDetailDirective} from "./intern/private-detail-page/private-detail.directive";
import { PrivateDetailEvaluationComponent } from './intern/private-detail-page/private-detail-evaluation/private-detail-evaluation.component';
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getDatabase, provideDatabase} from "@angular/fire/database";
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogOutPageComponent } from './public/log-out-page/log-out-page.component';
import {SharedService} from "./services/shared.service";
import { NewMaterialDialogComponent } from './intern/new-material-page/new-material-dialog/new-material-dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { PrivateDetailEvaluationDialogComponent } from './intern/private-detail-page/private-detail-evaluation/private-detail-evaluation-dialog/private-detail-evaluation-dialog.component';
import { InternNavDialogComponent } from './intern/intern-nav-dialog/intern-nav-dialog.component';
import { ApproveMemberDialogComponent } from './intern/approve-member-page/approve-member-dialog/approve-member-dialog.component';
import { ApproveMaterialDialogComponent } from './intern/approve-material-page/approve-material-dialog/approve-material-dialog.component';
import { RegisterDialogComponent } from './public/register-page/register-dialog/register-dialog.component';
import { ImpressumComponent } from './public/impressum/impressum.component';
import { DatenschutzComponent } from './public/datenschutz/datenschutz.component';
import { ProfilePageCreateCategorySelectionItemDialogComponent } from './intern/profile-page/profile-page-create-category-selection-item-dialog/profile-page-create-category-selection-item-dialog.component';
import { PrivateDetailEvaluationUploadDialogComponent } from './intern/private-detail-page/private-detail-evaluation/private-detail-evaluation-upload-dialog/private-detail-evaluation-upload-dialog.component';
import { PublicDetailContactDialogComponent } from './public/public-detail-page/public-detail-contact/public-detail-contact-dialog/public-detail-contact-dialog.component';
import { GenericDialogComponent } from './shared/generic-dialog/generic-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,

    ToolbarLoaderComponent,
    ToolbarLoggedOutComponent,
    ToolbarLoggedInComponent,
    ToolbarDirective,

    InternPageComponent,
    InternLoaderComponent,
    InternDirective,

    FooterComponent,
     HomePageComponent,
     PublicSearchPageComponent,
     RegisterPageComponent,
     LogInPageComponent,

     PrivateSearchPageComponent,
     ProfilePageComponent,
     NewMaterialPageComponent,
     ApproveMemberPageComponent,
     ApproveMaterialPageComponent,

    PublicDetailDirective,
     PublicDetailPageComponent,
     PublicDetailGeneralInformationComponent,
     PublicDetailCommentsComponent,
     PublicDetailContactComponent,

    PrivateDetailPageComponent,
    PrivateDetailCommentsComponent,
    PrivateDetailContactComponent,
    PrivateDetailGeneralInformationComponent,
    PrivateDetailDirective,
    PrivateDetailEvaluationComponent,
    LogOutPageComponent,

     NewMaterialDialogComponent,
      PrivateDetailEvaluationDialogComponent,
      InternNavDialogComponent,
      ApproveMemberDialogComponent,
      ApproveMaterialDialogComponent,
      RegisterDialogComponent,
      ImpressumComponent,
      DatenschutzComponent,
      ProfilePageCreateCategorySelectionItemDialogComponent,
      PrivateDetailEvaluationUploadDialogComponent,
      PublicDetailContactDialogComponent,
      GenericDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    ,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,

    ReactiveFormsModule,
    CommonModule,
    // NgbModule,
    FormsModule,
    ReactiveFormsModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),

  ],
  providers: [
    AdService,
    ToolbarService,
    CrudService,
    AuthService,
    InternService,
    PublicDetailService,
    PrivateDetailService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
