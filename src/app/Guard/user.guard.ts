import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Servces/user-auth.service';
import { trigger } from '@angular/animations';

export const userGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserAuthService);
  const router = inject(Router);

  if (userService.isUserLogged) {
    return true;
  } else {
    alert("you have to login first ");
    router.navigate(["/login"]);
    return false;
  }


};
