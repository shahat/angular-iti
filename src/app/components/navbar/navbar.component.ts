import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../Servces/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isLoged: boolean = true;
  constructor(private userAuth: UserAuthService) {
    this.isLoged = this.userAuth.isUserLogged;
}

ngOnInit(): void {
this.userAuth.getUserLoggedStatus().subscribe({
      next: (userStatus) => {
        this.isLoged = userStatus;
        console.log("isUser Logged from The nav ", this.isLoged);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
