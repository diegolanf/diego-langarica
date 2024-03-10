import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class AbstractApiService {
  protected readonly http: HttpClient = inject(HttpClient);

  protected getOne<T>(url: string[]): Observable<T> {
    return this.http.get<T>(this.url(url));
  }

  private url(path: string[]): string {
    return ['/api', ...path].join('/');
  }
}
