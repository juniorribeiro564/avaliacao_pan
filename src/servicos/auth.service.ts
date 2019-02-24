import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  tokenName = 'tokenClient';

  constructor() {
  }

  // ACCESS TOKEN
  public setToken(token) {
    localStorage.setItem(this.tokenName, token);
    return true;
  }

  public clear() {
    localStorage.removeItem(this.tokenName);
    return true;
  }

  public getToken() {
    return localStorage.getItem(this.tokenName);
  }

  public isToken() {
    return (this.getToken()) ? true : false;
  }



}
