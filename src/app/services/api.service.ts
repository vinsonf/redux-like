import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3005'

  constructor(
    private http: HttpClient,
  ) { }


  get<T>(resourceName: string) {
    return this.http.get<T>(this.baseUrl + '/' + resourceName);
  }
  post<T, D>(resourceName: string, data: D) {
    return this.http.post<T>(this.baseUrl + '/' + resourceName, data);
  }
}
