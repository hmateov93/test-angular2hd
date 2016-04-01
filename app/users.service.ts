import { Injectable }       from 'angular2/core';
import {User}           from './user';
import {Observable}     from 'rxjs/Observable';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';


@Injectable()
export class UsersService{
  constructor (private http: Http) {}

  private _UsersUrl = 'app/users.json';

  public getUsers () {
    return this.http.get(this._UsersUrl)
                    .map(res => <User[]> res.json().data)
                    .catch(this.handleError);
  }  

  public getUser(formData){ 
    return this.http.get(this._UsersUrl)
                    .map(res => <User> res.json().data.filter(user => user.name === formData.username && user.password === formData.password)[0])
                    .catch(this.handleError);
  }

  private handleError(error: Response){
    console.error("Error loading Users");
    return Observable.throw(error.json().error || 'Server error');
  }
}
