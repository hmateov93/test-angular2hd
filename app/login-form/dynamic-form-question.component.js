System.register(['angular2/core', 'angular2/common', './question-base'], function(exports_1, context_1) {
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
    var core_1, common_1, question_base_1;
    var DynamicFormQuestionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (question_base_1_1) {
                question_base_1 = question_base_1_1;
            }],
        execute: function() {
            DynamicFormQuestionComponent = (function () {
                function DynamicFormQuestionComponent() {
                }
                Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
                    get: function () { return this.form.controls[this.question.key].valid; },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', question_base_1.QuestionBase)
                ], DynamicFormQuestionComponent.prototype, "question", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', common_1.ControlGroup)
                ], DynamicFormQuestionComponent.prototype, "form", void 0);
                DynamicFormQuestionComponent = __decorate([
                    core_1.Component({
                        selector: 'df-question',
                        templateUrl: 'app/views/dynamic-form-question.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DynamicFormQuestionComponent);
                return DynamicFormQuestionComponent;
            }());
            exports_1("DynamicFormQuestionComponent", DynamicFormQuestionComponent);
        }
    }
});
//# sourceMappingURL=dynamic-form-question.component.js.map