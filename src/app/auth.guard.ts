import {Injectable} from '@angular/core';
import {CanActivate,Router,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import {LoginService} from './login.service'

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{
    constructor(
        private router: Router,
        private authenticationService: LoginService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        console.log("Hi"+currentUser)
       // return true;
        if (currentUser) {
            
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
            
                this.router.navigate(['/']);
                return false;
            }
 
            
            return true;
        }
        //this.router.navigate(['/login']
        return false;
    }
}