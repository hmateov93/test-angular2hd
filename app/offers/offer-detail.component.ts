import {Component, OnInit} from 'angular2/core';
import { Router,RouteParams } from 'angular2/router';

import {Offer} from './offer';
    import {OfferService}       from './offer.service';




@Component({
  selector: 'my-offer-detail',
<<<<<<< HEAD
  templateUrl: `app/views/offer-detail.component.html`,
  style: ``,
  providers: [OfferService]
=======
  /*templateUrl: '',*/
  template:"<p>Detalle de la oferta </p><p>{{offer.id}}</p> <button (click)='goBack()'>Back",
  style: ``
>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d

})

export class OfferDetailComponent  implements OnInit{
  constructor(private _router: Router,  private _routeParams:RouteParams, private _offerService:OfferService){}
<<<<<<< HEAD
  public offer:Offer={};

  setOffer(){
    let id = this._routeParams.get('id');
    this._offerService.getOffer(id).subscribe(
                           offer => this.offer = offer);
=======
  public offer: Offer={};

  setOffer(){
    let id = this._routeParams.get('id');
    this._offerService.getOffer(id).then(offer => this.offer = offer);
>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d
  }

  ngOnInit() {
    this.setOffer();
  }

  goBack(){
    this._router.navigate( ['Offers'] );
  }

}
