import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FileHandlingService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  sendFiles(formGroup: FormGroup) {
    const body = new FormData();
    body.append('file', formGroup['files'][0]);
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    this.http.post<FormData>('http://10.27.6.51:8080/api/uploadFile', body, { headers })
      .subscribe(
        response => console.log(response)
      );
  }
}
