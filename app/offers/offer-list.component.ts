    import {Component, OnInit} from 'angular2/core';

    import {Offer}              from './offer';
    import {OfferService}       from './offer.service';


    @Component({
      selector: 'offer-list',
      template: `
      <h3>Ofertas :</h3>
      <ul>
        <li *ngFor="#offer of offers">
          {{ offer.description }}
        </li>
      </ul>
      <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
      `,
      styles: ['.error {color:red;}'],
      providers: [OfferService]
    })

    export class OfferListComponent implements OnInit {
      constructor (private _offerService: OfferService) {}
      errorMessage: string;
      offers:Offer[];

      ngOnInit() {
        this.getOffers();
      }

      /*Obtiene los datos guardados en el json */
      getOffers() {
        this._offerService.getOffers()
                         .subscribe(
                           offers => this.offers = offers,
                           error =>  this.errorMessage = <any>error);
      }


    }
