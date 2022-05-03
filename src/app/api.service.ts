import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8081";

  login(data: any) {
    return this.http.post(this.url + '/api/auth/login', data);
  }

  getCurrentUser() {
    return this.http.get(this.url + '/api/users/current', this.generateHeader());
  }

  userRegistration(data: any) {
    return this.http.post(this.url + '/api/user/register', data);
  }

  generateHeader() : any {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }

    return {
      headers: headers
    };
  }
}

