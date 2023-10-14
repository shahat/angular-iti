import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser';
import { UsersService } from 'src/app/Servces/users.service';

@Component({
  selector: 'app-user-reactive-templet',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.scss']
})
export class UserReactiveTempletComponent {
  userForm: FormGroup;
  user: Iuser = {} as Iuser;
  constructor(private userService: UsersService, private router: Router) { }

  addNewUser() {

    this.userService.signUpUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/productparent']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
