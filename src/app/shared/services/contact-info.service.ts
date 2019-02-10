import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  constructor(private _http: HttpClient) { }
  saveInfo(data) {
    return this._http.post(`${environment.API}/store-info`, data);
  }
  contacts() {
    return this._http.get(`${environment.API}/contacts`);
  }
}
