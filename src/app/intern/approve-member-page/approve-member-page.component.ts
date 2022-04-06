import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {User} from "../../interfaces/user";
import {ApproveMaterialDialogComponent} from "../approve-material-page/approve-material-dialog/approve-material-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ApproveMemberDialogComponent} from "./approve-member-dialog/approve-member-dialog.component";
import {Router} from "@angular/router";
import {GenericDialogComponent} from "../../shared/generic-dialog/generic-dialog.component";

@Component({
  selector: 'app-approve-member-page',
  templateUrl: './approve-member-page.component.html',
  styleUrls: ['./approve-member-page.component.css']
})
export class ApproveMemberPageComponent implements OnInit {

  public users: User[] = [];

  constructor(private crudService: CrudService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.fetchUsersToApprove();
  }

  async onClickBestaetigen(userId: string){
    let response = await this.crudService.approveMember(userId);
    if(response){
      let dialogRef = this.dialog.open(ApproveMemberDialogComponent)
      let toRemoveIndex = this.users.findIndex(x => x.id == userId);
      this.users.forEach((element, index) => {
        if(index == toRemoveIndex){
          this.users.splice(index,1);
        }
      })
    }else{
      this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Bestätigen des Users"}})
    }
  }

  async fetchUsersToApprove(){

    let tempUsers = await this.crudService.getUsersToBeApproved();
    if(tempUsers){
      this.users = tempUsers;
    }else{
      this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Laden der Daten"}})
    }
  }

}
