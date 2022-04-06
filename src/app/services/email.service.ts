import {HttpClient, HttpHeaders} from "@angular/common/http";

export class EmailService{

  constructor(private httpreq:HttpClient) {
  }

  sendMessage(body:any){
    let headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpreq.post("htpp://localhost:4200/email", body,headers);
  }
}
