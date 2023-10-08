import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Servces/user-auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  userLoged: boolean = true;
  ngOnInit(): void {
    this.userLoged = this.userAuth.isUserLogged;
    console.log("user loged  ", this.userLoged);

  }
  constructor(private userAuth: UserAuthService) { }
  logInFun() {
    this.userAuth.login("mohamed122@gmail.com", "2222");
    this.userLoged = this.userAuth.isUserLogged;

  }
  logOutFun() {
    this.userAuth.logout();
    this.userLoged = this.userAuth.isUserLogged;

  }

}
