System.register(['angular2/core', './question-textbox', './question-password'], function(exports_1, context_1) {
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
    var core_1, question_textbox_1, question_password_1;
    var QuestionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (question_textbox_1_1) {
                question_textbox_1 = question_textbox_1_1;
            },
            function (question_password_1_1) {
                question_password_1 = question_password_1_1;
            }],
        execute: function() {
            QuestionService = (function () {
                function QuestionService() {
                }
                // Todo: get from a remote source of question metadata
                // Todo: make asynchronous
                QuestionService.prototype.getQuestions = function () {
                    var questions = [
                        new question_textbox_1.TextboxQuestion({
                            key: 'username',
                            label: 'User Name',
                            value: '',
                            required: true,
                            order: 1,
                            errorMessage: "Invalid username"
                        }),
                        new question_password_1.PasswordQuestion({
                            key: 'password',
                            label: 'Password',
                            type: 'password',
                            required: true,
                            order: 2,
                            errorMessage: "Invalid password"
                        })
                    ];
                    return questions.sort(function (a, b) { return a.order - b.order; });
                };
                QuestionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], QuestionService);
                return QuestionService;
            }());
            exports_1("QuestionService", QuestionService);
        }
    }
});
//# sourceMappingURL=question.service.js.map