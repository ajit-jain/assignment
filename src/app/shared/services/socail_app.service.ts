import { Injectable } from '@angular/core';
import { map, catchError, } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SocialAppService {
  params: any;
  state: any;
  constructor(public _http: HttpClient) {
    this.params = {
      response_type: 'code',
      redirect_uri: environment.LINKEDIN_REDIRECT,
    };
    this.state = Math.floor(Math.random() * 1e18);
  }
  getLinkedInLink(extras = {}) {
    const params = {
      client_id: environment.LINKEDIN_CLIENT_ID,
      state: 'l' + this.state,
      scope: 'r_basicprofile r_emailaddress'
    };
    Object.assign(this.params, params, extras);
    const qs = this.constructQS(this.params);
    return `https://www.linkedin.com/oauth/v2/authorization?${qs}`;
  }
  constructQS(params = this.params) {
    const qs = new URLSearchParams();
    for (let key in params) {
      qs.set(key, params[key]);
    }
    return qs.toString();
  }
  getLinkedInUser(code) {
    return this._http.get(`${environment.API}/get-linkedIn-user?authCode=${code}`);
  }
}
