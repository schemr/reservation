import { Component } from '@angular/core';
import { UserService } from '../../providers/user/user.service';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent {
    public userEmail: string;
    public userPassword: string;

    constructor(private _user: UserService) {}

    public login() {
        this._user.login()
    }
}