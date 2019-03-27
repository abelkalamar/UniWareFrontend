import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/services/subject.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  subscribedSubjects: { id: number, name: string }[] = [];

  constructor(
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    this.subjectService.getSubscribedSubjects
      .subscribe(
        subjects => {
          this.subscribedSubjects = subjects;
        }
      );
  }

  onClicked() {
    this.subjectService.getAllSubjects();
  }

}
