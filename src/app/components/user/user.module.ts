import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LogInComponent } from './log-in/log-in.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: "login", component: LogInComponent
}, {
  path: "veiwprofile", component: ViewProfileComponent
},
{ path: "editprofile", component: EditProfileComponent }
]
@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
