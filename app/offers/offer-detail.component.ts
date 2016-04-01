import {Component, OnInit} from 'angular2/core';
import { Router,RouteParams } from 'angular2/router';

import {Offer} from './offer';
    import {OfferService}       from './offer.service';




@Component({
  selector: 'my-offer-detail',
  /*templateUrl: '',*/
  template:"<p>Detalle de la oferta </p><p>{{offer.id}}</p> <button (click)='goBack()'>Back",
  style: ``

})

export class OfferDetailComponent  implements OnInit{
  constructor(private _router: Router,  private _routeParams:RouteParams, private _offerService:OfferService){}
  public offer: Offer={};

  setOffer(){
    let id = this._routeParams.get('id');
    this._offerService.getOffer(id).then(offer => this.offer = offer);
  }

  ngOnInit() {
    this.setOffer();
  }

  goBack(){
    this._router.navigate( ['Offers'] );
  }

}
