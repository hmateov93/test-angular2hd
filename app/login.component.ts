import { Component,ViewChild, OnInit }       from 'angular2/core';
import {DynamicForm}     from './login-form/dynamic-form.component';
import {QuestionService} from './login-form/question.service';
import {UsersService} from './users.service';
import {User}         from './user';
import {Http, Response} from 'angular2/http';

@Component({
  selector: 'my-login',
  template:`
  <div *ngIf="user">Welcome {{user.name}}</div><br>
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

  questions:any[]
  user:User;
  errorMessage:String;

  constructor(_qs: QuestionService,private _ussr: UsersService){
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
          if(this.user==null)this._loginform.invalidError=true;
          else this._loginform.invalidError=false;          
        },10);

      },1); 
      
      
  }
}
