System.register(['angular2/core', 'rxjs/Observable', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, Observable_1, http_1;
    var UsersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            UsersService = (function () {
                function UsersService(http) {
                    this.http = http;
                    this._UsersUrl = 'app/users.json';
                }
                UsersService.prototype.getUsers = function () {
                    return this.http.get(this._UsersUrl)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                UsersService.prototype.getUser = function (formData) {
                    return this.http.get(this._UsersUrl)
                        .map(function (res) { return res.json().data.filter(function (user) { return user.name === formData.username && user.password === formData.password; })[0]; })
                        .catch(this.handleError);
                };
                UsersService.prototype.handleError = function (error) {
                    console.error("Error loading Users");
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                UsersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UsersService);
                return UsersService;
            }());
            exports_1("UsersService", UsersService);
        }
    }
});
//# sourceMappingURL=users.service.js.map