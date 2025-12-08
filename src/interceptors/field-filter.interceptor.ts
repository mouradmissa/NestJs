import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler
  } from '@nestjs/common';
  import { Observable, map } from 'rxjs';
  
  @Injectable()
  export class FieldFilterInterceptor implements NestInterceptor {
  
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const request = context.switchToHttp().getRequest();
  
      // Rôle passé dans l'URL : /users/:role
      const role = request.params.role || 'client';
  
      return next.handle().pipe(
        map((data) => {
          if (Array.isArray(data)) {
            return data.map((user) => this.filterUserFields(user, role));
          }
          return this.filterUserFields(data, role);
        })
      );
    }
  
    private filterUserFields(user: any, role: string) {
      if (!user) return user;
  
      // Admin
      if (role === 'admin') {
        return {
          id: user.id,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
      }
  
      // Client
      return {
        id: user.id,
        email: user.email,
      };
    }
  }
  