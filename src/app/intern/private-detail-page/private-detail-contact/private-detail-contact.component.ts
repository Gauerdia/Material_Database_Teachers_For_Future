import { Component, OnInit } from '@angular/core';
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";
import {emailkey} from "../../../../environments/emailkey";
import {PublicDetailContactDialogComponent} from "../../../public/public-detail-page/public-detail-contact/public-detail-contact-dialog/public-detail-contact-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {GenericDialogComponent} from "../../../shared/generic-dialog/generic-dialog.component";

@Component({
  selector: 'app-public-detail-contact',
  templateUrl: './private-detail-contact.component.html',
  styleUrls: ['./private-detail-contact.component.css']
})
export class PrivateDetailContactComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm(emailkey.emailkey.SERVICE_ID,
      emailkey.emailkey.TEMPLATE_ID,
      e.target as HTMLFormElement,
      emailkey.emailkey.USER_ID)
      .then((result: EmailJSResponseStatus) => {
        if(result.text == "OK"){
          let dialogRef = this.dialog.open(PublicDetailContactDialogComponent)
        }else{
          this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Senden der E-Mail"}})
        }
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
