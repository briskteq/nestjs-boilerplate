import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
/*export interface Response<T> {
  data: T;
}*/

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    /*const {
      headers,
      url,
      method,
      params,
      query,
    } = context.switchToHttp().getRequest();*/

    /* add code to before api call*/

    return next.handle().pipe(
      tap(
        async (/*data*/) => {
          /* add code after api response */
        },
        async (/*error*/) => {
          /* add code if api throws error*/
        },
      ),
    );
  }
}
