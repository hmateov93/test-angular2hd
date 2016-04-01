System.register(['angular2/core', 'angular2/http', 'angular2/router', './offers/offer-list.component', './offers/offer-detail.component', './offers/offer.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, offer_list_component_1, offer_detail_component_1, offer_service_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Banca Prueba';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <h1>{{title}}</h1>\n   <nav>\n    <a [routerLink]=\"['Offers']\">Ofertas</a>\n  </nav>\n  <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, offer_service_1.OfferService]
                    }),
                    router_1.RouteConfig([
                        { path: '/offer/:id', name: 'OfferDetail', component: offer_detail_component_1.OfferDetailComponent },
                        { path: '/offers', name: 'Offers', component: offer_list_component_1.OfferListComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map