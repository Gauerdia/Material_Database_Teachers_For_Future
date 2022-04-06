import {Injectable, NgZone} from "@angular/core";
import {Router} from "@angular/router";
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "@angular/fire/auth";
import {BehaviorSubject} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {GenericDialogComponent} from "../shared/generic-dialog/generic-dialog.component";

@Injectable()
export class AuthService {

  private isLoggedIn = new BehaviorSubject(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(
    private auth: Auth,
    public router: Router,
    private dialog: MatDialog
  ){
  }


  // Sign in with email/password
  async SignIn(email: string, password: string) {

    let response = 0;

    await signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("t4f_id", userCredential.user.uid);
        response = 1;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error in SignIn function. ErrorCode:", errorCode, ", ErrorMessage:", errorMessage)
        console.log(errorMessage)
        response = 0;

        if(errorMessage.includes("auth/wrong-password")){
          this.dialog.open(GenericDialogComponent,{data:{message:"Verzeihung, leider haben Sie ein ungültiges Passwort eingegeben."}})
        }else if(errorMessage.includes("auth/invalid-email")){
          this.dialog.open(GenericDialogComponent,{data:{message:"Verzeihung, leider haben Sie eine ungültige E-Mail Adresse eingegeben."}})
        }
        else{
          this.dialog.open(GenericDialogComponent,{data:{message:"Verzeihung, leider hat es einen Fehler beim Anmelden gegeben."}})
        }
      });
    return response;
  }


  // Sign up with email/password
  async SignUp(email: string, password: string) {

    let userId;

    await createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("t4f_id", userCredential.user.uid);
        userId = userCredential.user.uid;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error in SignUp function. ErrorCode:", errorCode, ", ErrorMessage:", errorMessage)
      })
    return userId;
  }

  logOut(){
    return signOut(this.auth).then(() => {
      console.log("SignOut successful")
    }).catch((error) => {
      console.log("Error:", error)
    })
  }

  // Sign in with Google
  GoogleAuth() {
  }

}
