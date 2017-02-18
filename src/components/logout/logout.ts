import { Component } from '@angular/core';
import { UserService } from '../../providers/user/user.service';

@Component({
    selector: 'logout',
    template: 'logout.html',
    providers: [UserService]
})
export class LogoutComponent {
    constructor(private _user: UserService) {}

    public logout() {
        this._user.logout()
    }
}