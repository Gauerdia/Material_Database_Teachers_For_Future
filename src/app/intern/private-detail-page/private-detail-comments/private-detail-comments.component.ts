import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from "../../../services/crud.service";
import {BNEMaterial} from "../../../interfaces/BNEMaterial";
import {customComment} from '../../../interfaces/comments';

import {formatDate} from '@angular/common';
import {GenericDialogComponent} from "../../../shared/generic-dialog/generic-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-public-detail-comments',
  templateUrl: './private-detail-comments.component.html',
  styleUrls: ['./private-detail-comments.component.css']
})
export class PrivateDetailCommentsComponent implements OnInit {

  @Input() material!: BNEMaterial;

  public commentInput: any;

  public comments: customComment[] = [];

  constructor(private crudService: CrudService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchComments();
  }

  async sendComment(){

    let date = formatDate(new Date(), 'dd.MM.yyyy', 'en');

    let dateToSort = date.toString().replace(".", "0");
    dateToSort = dateToSort.toString().replace(".", "0");
    dateToSort = "9" + dateToSort;

    let response = await this.crudService.createComment(this.commentInput, localStorage.getItem("t4f_id")! ,localStorage.getItem("t4f_name")!,
      date, Number(dateToSort),this.material.id)
    if(response){
      this.dialog.open(GenericDialogComponent,{data:{message:"Kommentar erfolgreich gespeichert."}})
      await this.crudService.updateCommentCount(this.material.id, this.material.commentCount)
    }else{
      this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern des Kommentars"}})
    }
  }

  async fetchComments(){
    let tempComments = await this.crudService.getComments(this.material.id);
    if(tempComments){
      this.comments = tempComments;
      this.comments.sort((a,b) => a.dateToSort > b.dateToSort ? -1:1);
    }else{
      this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Laden der Kommentare"}})
    }
  }

}
