import {Component, Input, Output, EventEmitter, OnInit}     from 'angular2/core';
import {ControlGroup}                 from 'angular2/common';
import {QuestionBase}                 from './question-base';
import {QuestionControlService}       from './question-control.service';
import {DynamicFormQuestionComponent} from './dynamic-form-question.component';


@Component({
  selector:'dynamic-form',
  templateUrl:'app/views/dynamic-form.component.html',
  directives: [DynamicFormQuestionComponent],
  providers:  [QuestionControlService]
})
export class DynamicForm {
  @Input() questions: QuestionBase<any>[] = [];
  @Output() submit = new EventEmitter();

  form: ControlGroup;
  public invalidError:boolean;
  public formData = '';
  constructor(private _qcs: QuestionControlService) {  }

  ngOnInit(){
    this.form = this._qcs.toControlGroup(this.questions);
  }

  onSubmit() {
    this.formData = this.form.value;
    /*setTimeout(() => { 
      if(!this.invalidError){
        console.log(this.form);
        this.form = this._qcs.resetForm(this.questions);
        console.log(this.form);
      }
    },10);*/
  }



}