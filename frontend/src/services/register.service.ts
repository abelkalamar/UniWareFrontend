import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = environment.baseUrlArchie;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register(userData: { username: string, password: string, email: string }): void {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    this.http.post<Object>(`${this.baseUrl}/api/user/register`, {
      username: userData.username,
      password: userData.password,
      email: userData.email
    }, { headers })
      .subscribe(data => {
        console.log(data);
      });
  }

  login(userData: { username: string, password: string }): void {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-Requested-With', 'XMLHttpRequest');
    this.http.post<Object>(`${this.baseUrl}/api/auth/login`, {
      username: userData.username,
      password: userData.password
    }, { headers })
      .subscribe((data: { token: string }) => {
        window.localStorage.setItem('token', data.token);
        console.log(data);
        this.router.navigate(['/main']);
      });
    // this.router.navigate(['/main']);
  }

  // auth() {
  //   const headers: HttpHeaders = new HttpHeaders()
  //     .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  //   this.http.get<Object>(`${this.baseUrl}/api/user/users`, { headers })
  //     .subscribe((data: { token: string }) => {
  //       console.log(data);
  //     });
  // }
}
