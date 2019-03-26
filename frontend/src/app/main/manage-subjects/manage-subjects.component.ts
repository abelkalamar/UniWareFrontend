import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/services/subject.service';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.css']
})
export class ManageSubjectsComponent implements OnInit {

  subjects: Object[] = [];
  subscribedSubjects: { id: number, name: string }[] = [];

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjectService.getSubjects
      .subscribe(
        (subjects: { subjectList: Object[] }) => {
          this.subjects = subjects.subjectList;
          console.log(this.subjects);
        }
      );
  }

  onClicked() {
    this.getSubjects();
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
  }

}
