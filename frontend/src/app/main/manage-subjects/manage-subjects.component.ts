import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/services/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.css']
})
export class ManageSubjectsComponent implements OnInit {

  subjects: Object[] = [];
  subscribedSubjects: { id: number, name: string }[] = [];

  constructor(
    private subjectService: SubjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subjectService.getAllSubjects();
    this.subjectService.getSubjects
      .subscribe(
        (subjects: { subjectList: Object[] }) => {
          this.subjects = subjects.subjectList;
          console.log(this.subjects);
        }
      );
  }

  getSubjects(): void {
    // this.subjectService.getAllSubjects()
    //   .subscribe(
    //     response => {
    //       this.subjects = response.subjectList;
    //       console.log(this.subjects);
    //     }
    //   );
  }

  selectSubject(subject) {
    if (!this.subscribedSubjects.includes(subject)) {
      this.subscribedSubjects.push(subject);
    } else {
      const index = this.subscribedSubjects.indexOf(subject);
      this.subscribedSubjects.splice(index, 1);
    }
    console.log(this.subscribedSubjects);
  }

  subscribe() {
    this.subjectService.subscribeSubject(this.subscribedSubjects)
      .subscribe(
        result => {
          if (result === null) {
            console.log('Successfully subscribed!')
          }
        }
      );
    this.router.navigate(['/main']);
  }

}
