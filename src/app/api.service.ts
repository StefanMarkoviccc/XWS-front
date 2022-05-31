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
    return this.http.get(this.url + '/api/users/user/get-current-user-data', this.generateHeader());
  }

  getAllUsers() {
    return this.http.get(this.url + '/api/users/user/all', this.generateHeader());
  }

  getUser(data: any){
    return this.http.get(this.url + '/api/users/user/' + data.id, this.generateHeader());
  }

  getPublicProfiles(data: any) {
    return this.http.get(this.url + '/api/users/user/PublicUsers?search='+ data.search, this.generateHeader());
  }

  editProfile(data: any){
    return this.http.put(this.url + '/api/users/user/' + data.id, data, this.generateHeader());
  }

  createJobOffers(data: any){
    return this.http.post(this.url + '/api/jobs/job', data, this.generateHeader())
  }

  userRegistration(data: any) {
    return this.http.post(this.url + '/api/users/user/register', data);
  }

  getUserPublicPosts() {
    return this.http.get(this.url + '/api/posts/post/userPublicPosts', this.generateHeader());
  }

  getUserPosts(data : any) {
    return this.http.get(this.url + '/api/posts/post/userPosts/' + data.id , this.generateHeader());
  }

  publishPost(data: any){
    return this.http.post(this.url + '/api/posts/post', data, this.generateHeader());
  }

  follow(data: any){
    return this.http.post(this.url + '/api/users/userWhoFollow/add', data, this.generateHeader());
  }

  approveFollow(data: any){
    return this.http.put(this.url + '/api/users/userWhoFollow/approve/' + data.id, data, this.generateHeader());
  }

  rejectFollow(data: any){
    return this.http.put(this.url + '/api/users/userWhoFollow/reject/' + data.id, data, this.generateHeader());
  }

  getFollowRequests(data: any){
    return this.http.get(this.url + '/api/users/userWhoFollow/userFollows/' + data.id, this.generateHeader());
  }

  getUserFromLocalstorage() {

    let userString = localStorage.getItem('user');

    if(!userString) {
      return null;
    }

    return JSON.parse(userString);
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

