<<<<<<< HEAD
System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
=======
System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', './offer'], function(exports_1, context_1) {
>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d
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
<<<<<<< HEAD
    var core_1, http_1, Observable_1;
=======
    var core_1, http_1, Observable_1, offer_1;
>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d
    var OfferService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
<<<<<<< HEAD
=======
            },
            function (offer_1_1) {
                offer_1 = offer_1_1;
>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d
            }],
        execute: function() {
            OfferService = (function () {
                function OfferService(http) {
                    this.http = http;
<<<<<<< HEAD
                    this._offersUrl = 'app/json/offers.json';
=======
                    this._offersUrl = 'app/offers.json';
>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d
                }
                OfferService.prototype.getOffers = function () {
                    return this.http.get(this._offersUrl)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                OfferService.prototype.getOffer = function (id) {
<<<<<<< HEAD
                    return this.http.get(this._offersUrl)
                        .map(function (res) { return res.json().data.filter(function (offer) { return offer.id === id; })[0]; })
                        .catch(this.handleError);
=======
                    pruebaOffer: offer_1.Offer = {};
                    pruebaOffer = this.getOffers.filter(function (offer) { return offer.id === id; });
                    return pruebaOffer;
>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d
                };
                OfferService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                OfferService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], OfferService);
                return OfferService;
            }());
            exports_1("OfferService", OfferService);
        }
    }
});
//# sourceMappingURL=offer.service.js.map