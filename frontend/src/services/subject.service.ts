import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  allSubjects: EventEmitter<{ id: number, name: string }[]>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAllSubjects(): Observable<{ subjectList: Object[] }> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<{ subjectList: Object[] }>('http://10.27.6.51:8080/api/subject/all', { headers });
  }

  subscribeSubject(subjects: { id: number, name: string }[]) {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      .set('Content-Type', 'application/json');
    return this.http.post<{ id: number, name: string }[]>('http://10.27.6.51:8080/api/subject', { subjectList: subjects }, { headers });
  }

}
