import {Injectable}     from 'angular2/core';

import {Headers, RequestOptions} from 'angular2/http';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {Offer}           from './offer';

@Injectable()
export class OfferService {
  constructor (private http: Http) {}

  private _offersUrl = 'app/offers.json';


  getOffers () {
    return this.http.get(this._offersUrl)
                    .map(res => <Offer[]> res.json().data)
                    .catch(this.handleError);
  }

  getOffer (id: number){
    pruebaOffer:Offer={};
    pruebaOffer=this.getOffers.filter(offer => offer.id === id);

    return pruebaOffer;

  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
