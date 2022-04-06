import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {User} from "../../interfaces/user";
import {MatSelectChange} from "@angular/material/select";
import {CategorySelection} from "../../interfaces/categorySelection";
import {MatDialog} from "@angular/material/dialog";
import {NewMaterialDialogComponent} from "../new-material-page/new-material-dialog/new-material-dialog.component";
import {ProfilePageCreateCategorySelectionItemDialogComponent} from "./profile-page-create-category-selection-item-dialog/profile-page-create-category-selection-item-dialog.component";
import {GenericDialogComponent} from "../../shared/generic-dialog/generic-dialog.component";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  public user!: User;

  public categorySelection = ["Themengebiet", "Evaluation", "Niveau",
                              "Art", "Lizenz", "Alterseinschätzung",
                              "Fach", "SDG-Ziel"]

  categoryValue: any;
  categoryInput!: string;

  constructor(private crudService: CrudService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchUser();
  }

  selectCategory($event: MatSelectChange){
    this.categoryValue = $event.value;
  }

  clickCreateCategoryContent(){
    let newCategoryItem: CategorySelection ={
        value: "",
        label: "",
        category: "",
    };

    if(this.categoryValue == "Themengebiet"){
      this.crudService.createCategorySelectionItem(this.categoryInput, this.categoryInput,"topicData")
        .then((response) => {
          if(response){
            this.dialog.open(GenericDialogComponent,{data:{message:"Eintrag erfolgreich gespeichert."}})
          }else{
            this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern des Eintrags"}})
          }
        })

    }else if(this.categoryValue == "Evaluation"){

      this.crudService.createCategorySelectionItem(this.categoryInput, this.categoryInput,"evaluationData")
        .then((response) => {
          if(response){
            this.dialog.open(GenericDialogComponent,{data:{message:"Eintrag erfolgreich gespeichert."}})
          }else{
            this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern des Eintrags"}})
          }
        })

    }else if(this.categoryValue == "Niveau"){

      this.crudService.createCategorySelectionItem(this.categoryInput, this.categoryInput,"levelData")
        .then((response) => {
          if(response){
            this.dialog.open(GenericDialogComponent,{data:{message:"Eintrag erfolgreich gespeichert."}})
          }else{
            this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern des Eintrags"}})
          }
        })

    }else if(this.categoryValue == "Art"){

      this.crudService.createCategorySelectionItem(this.categoryInput, this.categoryInput,"typeData")
        .then((response) => {
          if(response){
            this.dialog.open(GenericDialogComponent,{data:{message:"Eintrag erfolgreich gespeichert."}})
          }else{
            this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern des Eintrags"}})
          }
        })


    }else if(this.categoryValue == "Lizenz"){

      this.crudService.createCategorySelectionItem(this.categoryInput, this.categoryInput,"licenceData")
        .then((response) => {
          if(response){
            this.dialog.open(GenericDialogComponent,{data:{message:"Eintrag erfolgreich gespeichert."}})
          }else{
            this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern des Eintrags"}})
          }
        })

    }
    else if(this.categoryValue == "Alterseinschätzung"){

      this.crudService.createCategorySelectionItem(this.categoryInput, this.categoryInput,"ageRecommendData")
        .then((response) => {
          if(response){
            this.dialog.open(GenericDialogComponent,{data:{message:"Eintrag erfolgreich gespeichert."}})
          }else{
            this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern des Eintrags"}})
          }
        })


    }
    else if(this.categoryValue == "Fach"){

      this.crudService.createCategorySelectionItem(this.categoryInput, this.categoryInput,"subjectData")
        .then((response) => {
          if(response){
            this.dialog.open(GenericDialogComponent,{data:{message:"Eintrag erfolgreich gespeichert."}})
          }else{
            this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern des Eintrags"}})
          }
        })

    }else if(this.categoryValue == "SDG-Ziel"){
      this.crudService.createCategorySelectionItem(this.categoryInput, this.categoryInput,"SDGGoalData")
        .then((response) => {
          if(response){
            this.dialog.open(GenericDialogComponent,{data:{message:"Eintrag erfolgreich gespeichert."}})
          }else{
            this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern des Eintrags"}})
          }
        })
    }
    else{
      console.log("Error in clickCreateCategoryContent. Category not found")
    }
  }

  async fetchUser(){
    await this.crudService.getUser(localStorage.getItem("t4f_id")!).then((userResponse) =>{
       this.user = userResponse as User
      localStorage.setItem("t4f_name",this.user.name);
      localStorage.setItem("t4f_role", this.user.role.toString());
    });

  }

}
