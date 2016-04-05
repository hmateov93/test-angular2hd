import {bootstrap}         from 'angular2/platform/browser';
<<<<<<< HEAD

import 'rxjs/Rx'; // Permite las operaciones con objetos "Observable" (objetos obtenidos al hacer un "get" con http)

import {AppComponent}         from './app.component';

bootstrap(AppComponent);
=======
import 'rxjs/Rx'; // Permite las operaciones con objetos "Observable" (objetos obtenidos al hacer un "get" con http)
import {AppComponent}         from './app.component';
import { ROUTER_PROVIDERS } from 'angular2/router';
import {LoggedInUserService} from './logged-in-user.service';

bootstrap(AppComponent, [ ROUTER_PROVIDERS, LoggedInUserService ]);
>>>>>>> 8687e47428915832d4e6ecd641efa02162f8189d

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
