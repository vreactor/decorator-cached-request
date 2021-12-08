import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CachedRequest, CacheService } from 'src/lib';

const API_PATH = 'https://601d4455be5f340017a196b4.mockapi.io/api/demo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private cache: CacheService,
  ) { }

  @CachedRequest(function () { return this.cache})
  getClients(): Observable<any> {
    return this.httpClient.get(`${API_PATH}/users`);
  }

  @CachedRequest(function () { return this.cache})
  getEmails(): Observable<any> {
    return this.httpClient.get(`${API_PATH}/emails`);
  }

  @CachedRequest(function () { return this.cache})
  getProducts(): Observable<any> {
    return this.httpClient.get(`${API_PATH}/products`);
  }
}
