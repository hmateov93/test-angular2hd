import { Injectable }       from 'angular2/core';
import {User}           from './user';


@Injectable()
export class LoggedInUserService{

  public user:User;
  constructor () {}

}
