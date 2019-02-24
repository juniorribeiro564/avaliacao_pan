import { AuthService } from './../servicos/auth.service';
import {Injectable} from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent,
  HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  token: any;

  constructor(private authService: AuthService) {

  }
ß
  addToken(req: HttpRequest<any>, token: string, excludeTokenInterceptor?): HttpRequest<any> {
    if (excludeTokenInterceptor || !token) {
      return req;
    } else {
      return req.clone({setHeaders: {Authorization: 'Bearer ' + token, Accept: 'application/vnd.github.jean-grey-preview+json'}});
    }
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent |
    HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    this.token = this.authService.getToken();
    const token = this.addToken(req, this.token);
    return next.handle(token).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
        }
      }, error => {
        console.error('ERROR', error);
      })
    );

  }
}
