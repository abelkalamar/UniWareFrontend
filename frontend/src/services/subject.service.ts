import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  getSubjects = new EventEmitter<{ subjectList: Object[] }>();

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
      }
    ]
  };

  constructor(
    private http: HttpClient
  ) { }

  getAllSubjects() {
    // const headers: HttpHeaders = new HttpHeaders()
    //   .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    // this.http.get<{ subjectList: Object[] }>('http://10.27.6.51:8080/api/subject/all', { headers })
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
    return this.http.post<{ id: number, name: string }[]>('http://10.27.6.51:8080/api/subject', { subjectList: subjects }, { headers });
  }

}
