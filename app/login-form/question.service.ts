import {Injectable}       from 'angular2/core';
import {QuestionBase}     from './question-base';
import {DynamicForm}      from './dynamic-form.component';
import {TextboxQuestion}  from './question-textbox';
import {PasswordQuestion}  from './question-password';
import {DropdownQuestion} from './question-dropdown';
@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    let questions:QuestionBase<any>[] = [
      new TextboxQuestion({
        key:'username',
        label:'User Name',
        value:'',
        required: true,
        order: 1,
        errorMessage: "Invalid username"
      }),
      new PasswordQuestion({
        key:'password',
        label:'Password',
        type: 'password',
        required:true,
        order: 2,
        errorMessage: "Invalid password"
      })
    ];
    return questions.sort((a,b) => a.order - b.order);
  }
}