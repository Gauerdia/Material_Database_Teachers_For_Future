import {Component, EventEmitter,OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {CrudService} from "../../services/crud.service";
import {User} from "../../interfaces/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import {ApproveMemberDialogComponent} from "../../intern/approve-member-page/approve-member-dialog/approve-member-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {PublicDetailContactDialogComponent} from "../public-detail-page/public-detail-contact/public-detail-contact-dialog/public-detail-contact-dialog.component";
import {GenericDialogComponent} from "../../shared/generic-dialog/generic-dialog.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  items: Observable<any[]> | undefined;

  public users: User[] = [];

  public nodeMailerForm!: FormGroup;

  trueString: string = "true"
  falseString: string = "false"

  constructor(private crudService: CrudService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog) {
  }


  ngOnInit(): void {}

}

