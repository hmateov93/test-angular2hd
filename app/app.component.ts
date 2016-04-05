import {Component, OnInit}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, RouteData } from 'angular2/router';


import {OfferListComponent} from './offers/offer-list.component';
import {OfferDetailComponent} from './offers/offer-detail.component';
import {OfferService}       from './offers/offer.service';

import {LoginComponent}     from './login.component';
import {LogoutComponent}     from './logout.component';
import {UsersService} from './users.service';
import {LoggedInUserService} from './logged-in-user.service';

import {User}         from './user';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
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


}



