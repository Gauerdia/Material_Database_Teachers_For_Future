import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {InternItem} from "./intern-item";
import {InternDirective} from "./intern.directive";
import {InternComponent} from "./intern.component";
import {InternService} from "./intern.service";
import {MatDialog} from "@angular/material/dialog";
import {InternNavDialogComponent} from "./intern-nav-dialog/intern-nav-dialog.component";


@Component({
  selector: 'intern-loader',
  templateUrl: './intern-loader.component.html',
  styleUrls: ['./intern-loader.component.css']
})
export class InternLoaderComponent implements OnInit {

  @Input() internComponents: InternItem[] = [];

  activeProfile: boolean = true;
  activePrivateSearch: boolean = false;
  activeNewMaterial: boolean = false;
  activeApproveMember: boolean = false;
  activeApproveMaterial: boolean = false;


  constructor(private internService: InternService,
              private dialog: MatDialog) {
    this.internComponents = this.internService.getComponents();
  }

  @ViewChild(InternDirective, {static: true}) toolbarHost!: InternDirective;


  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {

    let internItem;

    if (this.activeProfile) {
      internItem = this.internComponents[0];
    } else if (this.activePrivateSearch) {
      internItem = this.internComponents[1];
    } else if (this.activeNewMaterial) {
      internItem = this.internComponents[2];
    } else if (this.activeApproveMember) {
      internItem = this.internComponents[3];
    } else if (this.activeApproveMaterial) {
      internItem = this.internComponents[4];
    } else {
      internItem = this.internComponents[0];
    }

    const viewContainerRef = this.toolbarHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<InternComponent>(internItem.component);
    componentRef.instance.data = internItem.data;
  }

  toggleProfile() {
    this.activeProfile = true;
    this.activePrivateSearch = false;
    this.activeNewMaterial = false;
    this.activeApproveMember = false;
    this.activeApproveMaterial = false;

    this.loadComponent();
  }

  togglePrivateSearch() {

    if (localStorage.getItem("t4f_role") && Number(localStorage.getItem("t4f_role")) > 0) {
      this.activeProfile = false;
      this.activePrivateSearch = true;
      this.activeNewMaterial = false;
      this.activeApproveMember = false;
      this.activeApproveMaterial = false;
      this.loadComponent();
    } else {
      let dialogRef = this.dialog.open(InternNavDialogComponent)
    }
  }

  toggleNewMaterial() {

    if (localStorage.getItem("t4f_role") && Number(localStorage.getItem("t4f_role")) > 1) {
      this.activeProfile = false;
      this.activePrivateSearch = false;
      this.activeNewMaterial = true;
      this.activeApproveMember = false;
      this.activeApproveMaterial = false;
      this.loadComponent();
    } else {
      let dialogRef = this.dialog.open(InternNavDialogComponent)
    }
  }

  toggleApproveMember() {

    if (localStorage.getItem("t4f_role") && Number(localStorage.getItem("t4f_role")) > 2) {
      this.activeProfile = false;
      this.activePrivateSearch = false;
      this.activeNewMaterial = false;
      this.activeApproveMember = true;
      this.activeApproveMaterial = false;
      this.loadComponent();
    } else {
      let dialogRef = this.dialog.open(InternNavDialogComponent)
    }
  }

  toggleApproveMaterial() {

    if (localStorage.getItem("t4f_role") && Number(localStorage.getItem("t4f_role")) > 2) {
      this.activeProfile = false;
      this.activePrivateSearch = false;
      this.activeNewMaterial = false;
      this.activeApproveMember = false;
      this.activeApproveMaterial = true;
      this.loadComponent();
    } else {
      let dialogRef = this.dialog.open(InternNavDialogComponent)
    }
  }

  getNavClassProfile(activeProfile: boolean) {

    let userRole = localStorage.getItem("t4f_role");

    if (activeProfile) {
        return "navButtonActive";
      } else {
        return "navButtonInactive";
      }
  }

  getNavClassPrivateSearch(activePrivateSearch: boolean) {

    let userRole = localStorage.getItem("t4f_role");

    if (userRole && Number(userRole) > 0) {
      if (activePrivateSearch) {
        return "navButtonActive";
      } else {
        return "navButtonInactive";
      }
    } else {
      return "navButtonForbidden"
    }
  }

  getNavClassNewMaterial(activeNewMaterial: boolean) {

    let userRole = localStorage.getItem("t4f_role");

    if (userRole && Number(userRole) > 1) {
      if (activeNewMaterial) {
        return "navButtonActive";
      } else {
        return "navButtonInactive";
      }
    } else {
      return "navButtonForbidden"
    }
  }

  getNavClassApproveMember(activeApproveMember: boolean) {

    let userRole = localStorage.getItem("t4f_role");

    if (userRole && Number(userRole) > 2) {
      if (activeApproveMember) {
        return "navButtonActive";
      } else {
        return "navButtonInactive";
      }
    } else {
      return "navButtonForbidden";
    }
  }

  getNavClassApproveMaterial(activeApproveMaterial: boolean) {

    let userRole = localStorage.getItem("t4f_role");

    if (userRole && Number(userRole) > 2) {
      if (activeApproveMaterial) {
        return "navButtonActive";
      } else {
        return "navButtonInactive";
      }
    } else {
      return "navButtonForbidden";
    }
  }

}

