System.register(['angular2/core', './login-form/dynamic-form.component', './login-form/question.service', './users.service'], function(exports_1, context_1) {
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
    var core_1, dynamic_form_component_1, question_service_1, users_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dynamic_form_component_1_1) {
                dynamic_form_component_1 = dynamic_form_component_1_1;
            },
            function (question_service_1_1) {
                question_service_1 = question_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_qs, _ussr) {
                    this._ussr = _ussr;
                    this.questions = _qs.getQuestions();
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.getUser = function (formData) {
                    var _this = this;
                    this._ussr.getUser(formData).subscribe(function (user) { return _this.user = user; }, function (error) { return _this.errorMessage = error; });
                };
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.getUser(_this._loginform.formData);
                    }, 1);
                };
                __decorate([
                    core_1.ViewChild(dynamic_form_component_1.DynamicForm), 
                    __metadata('design:type', dynamic_form_component_1.DynamicForm)
                ], LoginComponent.prototype, "_loginform", void 0);
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-login',
                        template: "\n  <div *ngIf=\"user\">Welcome {{user.name}}</div><br>\n  <dynamic-form [questions]=\"questions\" (submit)=\"onSubmit()\"><dynamic-form>\n\n  ",
                        styles: ["\n  "],
                        directives: [dynamic_form_component_1.DynamicForm],
                        providers: [question_service_1.QuestionService]
                    }), 
                    __metadata('design:paramtypes', [question_service_1.QuestionService, users_service_1.UsersService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map