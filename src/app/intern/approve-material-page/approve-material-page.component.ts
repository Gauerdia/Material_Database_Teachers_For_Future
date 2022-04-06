import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {BNEMaterial} from "../../interfaces/BNEMaterial";
import {MatDialog} from "@angular/material/dialog";
import {ApproveMaterialDialogComponent} from "./approve-material-dialog/approve-material-dialog.component";
import {GenericDialogComponent} from "../../shared/generic-dialog/generic-dialog.component";

@Component({
  selector: 'app-approve-material-page',
  templateUrl: './approve-material-page.component.html',
  styleUrls: ['./approve-material-page.component.css']
})
export class ApproveMaterialPageComponent implements OnInit {

  material: BNEMaterial[] = [];

  constructor(private crudService: CrudService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchMaterialToBeFetched();
  }

  async onClickApprove(materialId: string){

    let response = await this.crudService.approveMaterial(materialId);
    if(response){
      let dialogRef = this.dialog.open(ApproveMaterialDialogComponent)
      let toRemoveIndex = this.material.findIndex(x => x.id == materialId);
      this.material.forEach((element, index) => {
        if(index == toRemoveIndex){
          this.material.splice(index,1);
        }
      })
    }else{
      this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Bestätigen des Materials."}})
    }
  }


  calculateMean(array: number[], index: number){

    let mean = 0;

    array.forEach((item) =>{
      mean += item;
    });

    mean /= array.length;

    if(index == 0){
      if(mean >= 1){
        return "activeStar"
      }else{
        return "inactiveStar"
      }
    }else if(index == 1){
      if(mean >= 2){
        return "activeStar"
      }else{
        return "inactiveStar"
      }
    }else if(index == 2){
      if(mean >= 3){
        return "activeStar"
      }else{
        return "inactiveStar"
      }
    }else if(index == 3){
      if(mean >= 4){
        return "activeStar"
      }else{
        return "inactiveStar"
      }
    }else if(index == 4){
      if(mean >= 5){
        return "activeStar"
      }else{
        return "inactiveStar"
      }
    }else{
      return "inactiveStar"
    }

  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  async fetchMaterialToBeFetched(){

    let materialResponse = await this.crudService.getMaterialToBeApproved();
    if(materialResponse) {
      this.material = materialResponse;
    }else{
      this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Laden der Daten"}})
    }
  }

}
