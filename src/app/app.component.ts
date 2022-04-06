import {Component, OnInit} from '@angular/core';
import {AdItem} from "./Ads/ad-item";
import {ToolbarItem} from "./Toolbar/toolbar-item";
import {SharedService} from "./services/shared.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ads: AdItem[] = [];
  toolbars: ToolbarItem[] = [];
  loggedIn: boolean = false;
  message: string = "";

  constructor(private sharedService: SharedService) {

    // The function that listens for log in/ log out
    // so that the toolbar can be reloaded.
    sharedService.changeEmitted$.subscribe(change => {
      if(change == 1){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
    });
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn(){
    if(localStorage.getItem("t4f_id")){
      this.loggedIn = true;
    }
  }

}
