import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`https://reqres.in/api/users?page=${1}`);
  }

  getUserById(id: number) {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }

  updateUser(id: number, body: any) {
    return this.http.put(`https://reqres.in/api/users/${id}`, body);
  }

  addUser(body: any) {
    return this.http.post(`https://reqres.in/api/users`, body);
  }

  deleteUser(id: number) {
    return this.http.delete(`https://reqres.in/api/users/${id}`);
  }
}
