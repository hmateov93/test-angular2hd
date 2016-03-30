import { Component }       from 'angular2/core';
import {DynamicForm}     from './dynamic-form.component';
import {QuestionService} from './question.service';


@Component({
  selector: 'my-login',
  template:`
  <dynamic-form [questions]="questions"><dynamic-form>
  `,
  styles: [`
  `],
  directives: [DynamicForm],
  providers:  [QuestionService]
})


export class LoginComponent{
  questions:any[]
  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }  
}
