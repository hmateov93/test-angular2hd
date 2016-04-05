System.register(['angular2/core', './login-form/dynamic-form.component', './login-form/question.service', 'angular2/router', './logged-in-user.service'], function(exports_1, context_1) {
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
    var core_1, dynamic_form_component_1, question_service_1, router_1, logged_in_user_service_1;
    var LogoutComponent;
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
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (logged_in_user_service_1_1) {
                logged_in_user_service_1 = logged_in_user_service_1_1;
            }],
        execute: function() {
            LogoutComponent = (function () {
                function LogoutComponent(_router, _lius) {
                    this._router = _router;
                    this._lius = _lius;
                }
                LogoutComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this._lius.user = null;
                        _this._router.navigate(['LogIn']);
                    }, 1000);
                };
                LogoutComponent = __decorate([
                    core_1.Component({
                        selector: 'my-logout',
                        template: "\n      <br>You are logging off...\n  ",
                        styles: ["\n  "],
                        directives: [dynamic_form_component_1.DynamicForm],
                        providers: [question_service_1.QuestionService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, logged_in_user_service_1.LoggedInUserService])
                ], LogoutComponent);
                return LogoutComponent;
            }());
            exports_1("LogoutComponent", LogoutComponent);
        }
    }
});
//# sourceMappingURL=logout.component.js.map