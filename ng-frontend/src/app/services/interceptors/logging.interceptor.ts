import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('[LOGGER INTERCEPTOR WORKS]');
    console.log('REQUEST : ', req);
    return next.handle(req);
  }
}

// export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
