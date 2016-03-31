
    import {Component}         from 'angular2/core';
    import {HTTP_PROVIDERS}    from 'angular2/http';

    import {OfferListComponent} from './offers/offer-list.component';


    @Component({
      selector: 'my-app',
      template: `
      <h1>{{title}}</h1>
      <offer-list></offer-list>
      `,
      directives:[OfferListComponent],
      providers: [HTTP_PROVIDERS]
    })

    export class AppComponent {
      title='Banca Prueba';
    }



