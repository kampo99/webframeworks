import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {SessionSbService} from "./session-sb.service";
import {Observable, throwError} from "rxjs";
import {catchError, retry, tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthSbHttpInterceptorService implements HttpInterceptor {

  constructor(private sessionSbService: SessionSbService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.endsWith('/authentication/login')) {
      return next.handle(req);
    } else {


      let token = this.sessionSbService.getTokenFromBrowserStorage();


      if (token != null) {
        req = this.addToken(req, token);
        return next.handle(req);
      }

      return next.handle(req).pipe(tap(
          (event: HttpEvent<any>) => {
          },
          (error: HttpErrorResponse) => {
            if (error.status == 401) {
              this.router.navigate(['/sign-out']);
            } else if (error.status != 406) {
              let errorMessage = `Request-url = ${error.url}`
                + `Response status code = ${error.status}`
                + `Error message = ${error.message}`;
              this.router.navigate(['/error'], {state: {message: errorMessage}});
            }
          }
        )
      )
    }
  }


  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
