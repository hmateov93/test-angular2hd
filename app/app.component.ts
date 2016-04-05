<<<<<<< HEAD
import {Component}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
=======
import {Component, OnInit}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, RouteData } from 'angular2/router';
>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d


import {OfferListComponent} from './offers/offer-list.component';
import {OfferDetailComponent} from './offers/offer-detail.component';
<<<<<<< HEAD


=======
import {OfferService}       from './offers/offer.service';

import {LoginComponent}     from './login.component';
import {LogoutComponent}     from './logout.component';
import {UsersService} from './users.service';
import {LoggedInUserService} from './logged-in-user.service';

import {User}         from './user';
>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
<<<<<<< HEAD
   <nav>
    <a [routerLink]="['Offers']">Ofertas</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  directives:[ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@RouteConfig([
  {path:'/offer/:id',    name: 'OfferDetail',   component: OfferDetailComponent},
  {path:'/offers',    name: 'Offers',   component: OfferListComponent}
])


export class AppComponent {
  title='Banca Prueba';
=======
    <nav>
      <a [routerLink]="['Offers']" *ngIf="_lius.user">Ofertas</a>
      <a [routerLink]="['LogIn']" *ngIf="!_lius.user">LogIn</a>
      <a [routerLink]="['LogOut']" *ngIf="_lius.user">LogOut</a>
    </nav>
    <router-outlet ></router-outlet>  
  `,
  directives:[ROUTER_DIRECTIVES,LoginComponent],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, OfferService,UsersService]
})

@RouteConfig([
  {path:'/login',    name: 'LogIn',   component: LoginComponent, useAsDefault: true},
  {path:'/offer/:id',    name: 'OfferDetail',   component: OfferDetailComponent},
  {path:'/offers',    name: 'Offers',   component: OfferListComponent},
  {path:'/logout',    name: 'LogOut',   component: LogoutComponent},
  {path:'/**',    name: 'Default',   component: LoginComponent}
])


export class AppComponent implements OnInit{
  title='Banca Prueba';
  

  constructor(public _lius:LoggedInUserService){

  }

  ngOnInit(){
  }

 
>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d
}



