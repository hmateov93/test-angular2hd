System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuestionBase;
    return {
        setters:[],
        execute: function() {
            QuestionBase = (function () {
                function QuestionBase(options) {
                    if (options === void 0) { options = {}; }
                    this.value = options.value;
                    this.key = options.key || '';
                    this.label = options.label || '';
                    this.required = !!options.required;
                    this.order = options.order === undefined ? 1 : options.order;
                    this.controlType = options.controlType || '';
                    this.error = options.error || false;
                    this.errorMessage = options.errorMessage || "";
                }
                return QuestionBase;
            }());
            exports_1("QuestionBase", QuestionBase);
        }
    }
});
//# sourceMappingURL=question-base.js.map