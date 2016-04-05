import { Component,ViewChild, OnInit, Output, EventEmitter }       from 'angular2/core';
import {DynamicForm}     from './login-form/dynamic-form.component';
import {QuestionService} from './login-form/question.service';
import {UsersService} from './users.service';
import {User}         from './user';
import {Http, Response} from 'angular2/http';
import { Router} from 'angular2/router';
import {LoggedInUserService} from './logged-in-user.service';

@Component({
  selector: 'my-login',
  template:`
  <br>
  <dynamic-form [questions]="questions" (submit)="onSubmit()"><dynamic-form>

  `,
  styles: [`
  `],
  directives: [DynamicForm],
  providers:  [QuestionService]
})


export class LoginComponent  implements OnInit{
  @ViewChild(DynamicForm)
  private _loginform:DynamicForm;

  logged=false;
  error:boolean=false;
  questions:any[]
  user:User;
  errorMessage:String;

  constructor(_qs: QuestionService,private _ussr: UsersService, private _router: Router,public _lius: LoggedInUserService){
    this.questions = _qs.getQuestions();
    
  } 

  ngOnInit(){
    
  }

  getUser(formData){
    this._ussr.getUser(formData).subscribe(
       user => this.user=user,
       error =>  this.errorMessage = <any>error);
  }

  onSubmit(){
      setTimeout(() => {   
        this.user==null;
        this.getUser(this._loginform.formData);
        setTimeout(() => { 
          if(this.user==null){
            this._loginform.questions[0].error=true;
            this._loginform.questions[1].error=false;
            this.error=true;
          }
          else{
            this._loginform.questions[0].error=false;
            if(this.user.password!=this._loginform.formData.password){
              this._loginform.questions[1].error=true;  
              this.error=true;
            }
            else{
              this._loginform.questions[1].error=false;
              this.error=false;
              this._lius.user=this.user;
              this._router.navigate( ['Offers'] );
            } 
          }      
        },10);

      },1); 
      
      
  }
}
