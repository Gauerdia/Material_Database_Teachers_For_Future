import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.services";
import {SharedService} from "../../services/shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

  eMailValue: string = "";
  password: string = "";

  passwordInput!: string;
  eMailInput!:string;

  constructor(
    private authService: AuthService,
    private sharedService: SharedService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async logIn(){
    let response = await this.authService.SignIn(this.eMailInput,this.passwordInput)
    if(response == 1){
      this.changeLoggedInVariable();
      this.router.navigate(['/intern']);
    }
  }

  changeLoggedInVariable(){
    this.sharedService.toggleLoggedIn(1);
  }

}
