System.register(['./question-base'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var question_base_1;
    var PasswordQuestion;
    return {
        setters:[
            function (question_base_1_1) {
                question_base_1 = question_base_1_1;
            }],
        execute: function() {
            PasswordQuestion = (function (_super) {
                __extends(PasswordQuestion, _super);
                function PasswordQuestion(options) {
                    if (options === void 0) { options = {}; }
                    _super.call(this, options);
                    this.controlType = 'textbox';
                    this.type = options['type'] || '';
                }
                return PasswordQuestion;
            }(question_base_1.QuestionBase));
            exports_1("PasswordQuestion", PasswordQuestion);
        }
    }
});
//# sourceMappingURL=question-password.js.map