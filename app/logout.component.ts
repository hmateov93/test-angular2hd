import { Component,ViewChild, OnInit, Output, EventEmitter }       from 'angular2/core';
import {DynamicForm}     from './login-form/dynamic-form.component';
import {QuestionService} from './login-form/question.service';
import {UsersService} from './users.service';
import {User}         from './user';
import {Http, Response} from 'angular2/http';
import { Router} from 'angular2/router';
import {LoggedInUserService} from './logged-in-user.service';

@Component({
  selector: 'my-logout',
  template:`
      <br>You are logging off...
  `,
  styles: [`
  `],
  directives: [DynamicForm],
  providers:  [QuestionService]
})


export class LogoutComponent  implements OnInit{

  constructor(private _router: Router,public _lius: LoggedInUserService){    
  } 

  ngOnInit(){
    setTimeout(()=>{
      this._lius.user=null;
      this._router.navigate( ['LogIn'] );
    },1000);
    
  }

}
