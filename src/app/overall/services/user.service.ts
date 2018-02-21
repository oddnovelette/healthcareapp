import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
import {Http} from '@angular/http';
import {Api} from '../../healthapp/overall/backend/api';

@Injectable()
export class UserService extends Api {

  private readonly url_path = 'users?email=';

  constructor(public http: Http) {
    super(http);
  }

  getUser(email: string): Observable<User> {
    return this.get(`${this.url_path}${email}`)
      .map((users: User[]) => users[0] ? users[0] : undefined);
  }

  createUser(user: User): Observable<User> {
    return this.post('users', user);
  }

}
