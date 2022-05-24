import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8080";

  login(data: any) {
    return this.http.post(this.url + '/api/users/auth/login', data);
  }

  getCurrentUser() {
    return this.http.get(this.url + '/api/users/user/current', this.generateHeader());
  }

  getPublicProfiles(data: any) {
    return this.http.get(this.url + '/api/users/user/PublicUsers?search='+ data.search, this.generateHeader());
  }

  userRegistration(data: any) {
    return this.http.post(this.url + '/api/users/user/register', data);
  }

  getUserPublicPosts() {
    return this.http.post(this.url + '/api/posts/post/userPublicPosts', this.generateHeader());
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

