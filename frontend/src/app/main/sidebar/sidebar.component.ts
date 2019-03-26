import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/services/subject.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
  }

  onClicked() {
    this.subjectService.getAllSubjects();
  }

}
