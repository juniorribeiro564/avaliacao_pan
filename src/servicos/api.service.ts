import { environment } from './../environments/environment.prod';
import {Injectable} from '@angular/core';

import {
  HttpClient, HttpParams, HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _siteGithub = 'https://github.com';
  _baseApiGithub = 'https://api.github.com';

  constructor(private _http: HttpClient) {
  }

  getUserRepo(): Observable<any> {
    return this._http.get([this._baseApiGithub, 'user/repos'].join('/'));
  }

  login(code): Observable<any> {
    const body = new HttpParams()
      .set('client_id', environment.client_id)
      .set('code', code)
      .set('accept', 'json')
      .set('client_secret', environment.client_secret);
    return this._http.post(['api/login/oauth/access_token'].join('/'), body, {
      responseType: 'text',
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
}
