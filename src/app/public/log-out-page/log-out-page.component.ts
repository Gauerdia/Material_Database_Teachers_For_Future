import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-out-page',
  templateUrl: './log-out-page.component.html',
  styleUrls: ['./log-out-page.component.css']
})
export class LogOutPageComponent implements OnInit {

  constructor(private sharedService: SharedService,
              private router: Router) { }

  ngOnInit(): void {
    this.sharedService.toggleLoggedIn(0);
    localStorage.removeItem("t4f_id");
    localStorage.removeItem("t4f_name");
    localStorage.removeItem("t4f_role");
    this.router.navigate(['/home']);
  }

}
