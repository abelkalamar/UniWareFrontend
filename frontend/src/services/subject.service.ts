import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  getSubjects = new EventEmitter<{ subjectList: Object[] }>();
  getSubscribedSubjects = new EventEmitter<{ id: number, name: string }[]>();
  baseUrl = environment.baseUrlArchie;

  mockSubjects = {
    subjectList: [
      {
        id: 1,
        name: 'Math'
      },
      {
        id: 2,
        name: 'History'
      },
      {
        id: 3,
        name: 'Literature'
      },
      {
        id: 4,
        name: 'Phisycs'
      },
      {
        id: 5,
        name: 'Sports'
      },
      {
        id: 6,
        name: 'Chemistry'
      },
      {
        id: 7,
        name: 'Art'
      },
      {
        id: 8,
        name: 'Biology'
      },
      {
        id: 9,
        name: 'Geography'
      },
      {
        id: 10,
        name: 'Grammar'
      },
      {
        id: 11,
        name: 'Ethics'
      },
      {
        id: 12,
        name: 'English'
      },
      {
        id: 13,
        name: 'German'
      }
    ]
  };

  constructor(
    private http: HttpClient
  ) { }

  getAllSubjects() {
    // const headers: HttpHeaders = new HttpHeaders()
    //   .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    // this.http.get<{ subjectList: Object[] }>(`${this.baseUrl}/api/subject/all`, { headers })
    //   .subscribe(
    //     subjects => {
    //       this.getSubjects.emit(subjects);
    //     }
    //   );
    this.getSubjects.emit(this.mockSubjects);
  }

  subscribeSubject(subjects: { id: number, name: string }[]) {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      .set('Content-Type', 'application/json');
    this.getSubscribedSubjects.emit(subjects);
    return new Observable<null>();
    // return this.http.post<{ id: number, name: string }[]>(`${this.baseUrl}/api/subject`, { subjectList: subjects }, { headers });
  }

  getSubscribedSubjectsFromBackend(): Observable<{ subjectList: { id: number, name: string }[] }> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<{ subjectList: { id: number, name: string }[] }>(`${this.baseUrl}/api/subject/all`, { headers });
  }

}
