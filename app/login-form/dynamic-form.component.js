System.register(['angular2/core', './question-control.service', './dynamic-form-question.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, question_control_service_1, dynamic_form_question_component_1;
    var DynamicForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (question_control_service_1_1) {
                question_control_service_1 = question_control_service_1_1;
            },
            function (dynamic_form_question_component_1_1) {
                dynamic_form_question_component_1 = dynamic_form_question_component_1_1;
            }],
        execute: function() {
            DynamicForm = (function () {
                function DynamicForm(_qcs) {
                    this._qcs = _qcs;
                    this.questions = [];
                    this.submit = new core_1.EventEmitter();
                    this.formData = '';
                }
                DynamicForm.prototype.ngOnInit = function () {
                    this.form = this._qcs.toControlGroup(this.questions);
                };
                DynamicForm.prototype.onSubmit = function () {
                    this.formData = this.form.value;
                    /*setTimeout(() => {
                      if(!this.invalidError){
                        console.log(this.form);
                        this.form = this._qcs.resetForm(this.questions);
                        console.log(this.form);
                      }
                    },10);*/
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], DynamicForm.prototype, "questions", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DynamicForm.prototype, "submit", void 0);
                DynamicForm = __decorate([
                    core_1.Component({
                        selector: 'dynamic-form',
                        templateUrl: 'app/views/dynamic-form.component.html',
                        directives: [dynamic_form_question_component_1.DynamicFormQuestionComponent],
                        providers: [question_control_service_1.QuestionControlService]
                    }), 
                    __metadata('design:paramtypes', [question_control_service_1.QuestionControlService])
                ], DynamicForm);
                return DynamicForm;
            }());
            exports_1("DynamicForm", DynamicForm);
        }
    }
});
//# sourceMappingURL=dynamic-form.component.js.map