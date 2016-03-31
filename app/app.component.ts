import { Component }       from 'angular2/core';
import {LoginComponent}     from './login.component';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {UsersService} from './users.service';

@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <my-login></my-login>
  `,
  styles: [`
  `],
  directives: [LoginComponent],
  providers: [HTTP_PROVIDERS,UsersService]
})


export class AppComponent{
  title = "Test Angular Project";
  constructor() {}  
}
