import { Component } from '@angular/core';
import { User } from './shared/models/user';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {

    message: string = 'Hello!';
    users: User[] = [
        { id: 25, name: 'Samuel', username: 'dispt' },
        { id: 26, name: "Jeancarlos", username: "smancebo" },
        { id: 27, name: "Sam", username: "sjmancebo" }
    ];

    activeUser: User;
    onUserCreated(event) {
        this.users.push(event.user);
    }

    selectUser(user: User) {
        this.activeUser = user;
    };

}
