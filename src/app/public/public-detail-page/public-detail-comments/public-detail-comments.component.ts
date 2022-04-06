import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from "../../../services/crud.service";
import {BNEMaterial} from "../../../interfaces/BNEMaterial";
import {customComment} from '../../../interfaces/comments';
import {GenericDialogComponent} from "../../../shared/generic-dialog/generic-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-public-detail-comments',
  templateUrl: './public-detail-comments.component.html',
  styleUrls: ['./public-detail-comments.component.css']
})
export class PublicDetailCommentsComponent implements OnInit {

  @Input() material!: BNEMaterial;

  public comments: customComment[] = [];

  constructor(private crudService: CrudService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchComments();
  }

  async fetchComments(){
    let tempComment = await this.crudService.getComments(this.material.id);
    if(tempComment){
      this.comments = tempComment;
    }else{
      this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Laden der Kommentare."}})
    }
  }
}
