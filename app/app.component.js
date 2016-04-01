System.register(['angular2/core', 'angular2/http', 'angular2/router', './offers/offer-list.component', './offers/offer-detail.component', './offers/offer.service', './login.component', './logout.component', './users.service', './logged-in-user.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, offer_list_component_1, offer_detail_component_1, offer_service_1, login_component_1, logout_component_1, users_service_1, logged_in_user_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (offer_list_component_1_1) {
                offer_list_component_1 = offer_list_component_1_1;
            },
            function (offer_detail_component_1_1) {
                offer_detail_component_1 = offer_detail_component_1_1;
            },
            function (offer_service_1_1) {
                offer_service_1 = offer_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (logged_in_user_service_1_1) {
                logged_in_user_service_1 = logged_in_user_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_lius) {
                    this._lius = _lius;
                    this.title = 'Banca Prueba';
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['Offers']\" *ngIf=\"_lius.user\">Ofertas</a>\n      <a [routerLink]=\"['LogIn']\" *ngIf=\"!_lius.user\">LogIn</a>\n      <a [routerLink]=\"['LogOut']\" *ngIf=\"_lius.user\">LogOut</a>\n    </nav>\n    <router-outlet ></router-outlet>  \n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent],
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, offer_service_1.OfferService, users_service_1.UsersService]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'LogIn', component: login_component_1.LoginComponent, useAsDefault: true },
                        { path: '/offer/:id', name: 'OfferDetail', component: offer_detail_component_1.OfferDetailComponent },
                        { path: '/offers', name: 'Offers', component: offer_list_component_1.OfferListComponent },
                        { path: '/logout', name: 'LogOut', component: logout_component_1.LogoutComponent },
                        { path: '/**', name: 'Default', component: login_component_1.LoginComponent }
                    ]), 
                    __metadata('design:paramtypes', [logged_in_user_service_1.LoggedInUserService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map