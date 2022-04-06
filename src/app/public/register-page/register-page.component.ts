import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.services";
import {SharedService} from "../../services/shared.service";
import {Router} from "@angular/router";
import {CrudService} from "../../services/crud.service";
import {NewMaterialDialogComponent} from "../../intern/new-material-page/new-material-dialog/new-material-dialog.component";
import {RegisterDialogComponent} from "./register-dialog/register-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {GenericDialogComponent} from "../../shared/generic-dialog/generic-dialog.component";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  eMailValue: string = "";
  password: string = "";

  nameInput!: string;
  passwordInput!: string;
  eMailInput!:string;
  experienceInput!: string;

  constructor(
    private authService: AuthService,
    private crudService: CrudService,
    private sharedService: SharedService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  async register(){
    let userId = await this.authService.SignUp(this.eMailInput,this.passwordInput)
    let response = await this.crudService.createUser(this.eMailInput, this.experienceInput, this.nameInput, userId!)
    if(response){
      this.changeLoggedInVariable();
      this.dialog.open(RegisterDialogComponent)
      this.router.navigate(['/intern']);
    }else{
      this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Erstellen des Users."}})
    }
  }

  changeLoggedInVariable(){
    this.sharedService.toggleLoggedIn(1);
  }

}
