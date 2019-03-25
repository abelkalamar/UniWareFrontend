import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(userData: { username: string, password: string, email: string }) {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    this.http.post<Object>('http://10.27.6.60:8080/api/user/register', {
      username: userData.username,
      password: userData.password,
      email: userData.email
    }, { headers })
      .subscribe(data => {
        console.log(data);
      });
  }

  login(userData: { username: string, password: string }) {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-Requested-With', 'XMLHttpRequest');
    this.http.post<Object>('http://10.27.6.60:8080/api/auth/login', {
      username: userData.username,
      password: userData.password
    }, { headers })
      .subscribe((data: { token: string }) => {
        window.localStorage.setItem('token', data.token);
        console.log(data);
      });
  }

  // auth() {
  //   const headers: HttpHeaders = new HttpHeaders()
  //     .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  //   this.http.get<Object>('http://10.27.6.60:8080/api/user/users', { headers })
  //     .subscribe((data: { token: string }) => {
  //       console.log(data);
  //     });
  // }
}
