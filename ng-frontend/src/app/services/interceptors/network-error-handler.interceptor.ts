import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

export class NetworkErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((value) => console.log('[TAP]', value)),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.warn('Unauthorired');
        } else if (error.status === 500) {
          console.warn('Internal Server Error');
        } else if (error.status === 404) {
          console.warn('Resource not found');
        } else {
          console.warn(error);
        }
        return throwError(() => error);
      })
    );
  }
}

// export const networkErrorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
