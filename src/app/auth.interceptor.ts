import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let modifiedRequest = request.clone({
      setHeaders: {
        'apipass': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IkJlcnNlcmtlckA1NjE5MDc4NiIsImlhdCI6MTcxNjMwMTQ4MH0.0Jp6-stPdWo9W3Ci-vin1_oznB-8GJsaUmEsX_nJxws'
      }
    });
  
    return next.handle(modifiedRequest);
  }
}
