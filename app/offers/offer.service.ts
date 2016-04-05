import {Injectable}     from 'angular2/core';

import {Headers, RequestOptions} from 'angular2/http';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {Offer}           from './offer';

@Injectable()
export class OfferService {
  constructor (private http: Http) {}

<<<<<<< HEAD
  private _offersUrl = 'app/json/offers.json';
=======
  private _offersUrl = 'app/offers.json';

>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d

  getOffers () {
    return this.http.get(this._offersUrl)
                    .map(res => <Offer[]> res.json().data)
                    .catch(this.handleError);
  }

<<<<<<< HEAD
  getOffer (id: string){
    return this.http.get(this._offersUrl)
            .map(res => <Offer> res.json().data.filter(offer => offer.id === id)[0])
            .catch(this.handleError);
=======
  getOffer (id: number){
    pruebaOffer:Offer={};
    pruebaOffer=this.getOffers.filter(offer => offer.id === id);

    return pruebaOffer;

>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
