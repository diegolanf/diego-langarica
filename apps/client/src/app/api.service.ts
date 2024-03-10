import { Injectable } from '@angular/core';
import { AbstractApiService } from '@dl/data-access';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService extends AbstractApiService {
  getWelcomeMessage(): Observable<{ message: string }> {
    return this.getOne<{ message: string }>([]);
  }
}
