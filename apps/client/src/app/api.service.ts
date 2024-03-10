import { Injectable } from '@angular/core';
import { AbstractApiService } from '@diego-langarica/data-access';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService extends AbstractApiService {
  getWelcomeMessage(): Observable<string> {
    return this.getOne<string>([]);
  }
}
