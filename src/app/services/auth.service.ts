import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = environment.apiUrl + 'auth';

  login(loginModel: LoginModel) {
    let newPath = this.apiUrl + '/login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, loginModel);
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else return false;
  }
}
