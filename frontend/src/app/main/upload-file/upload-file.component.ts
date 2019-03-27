import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileHandlingService } from 'src/services/file-handling.service';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/services/subject.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  subject: { id: number, name: string };
  uploadFile = new FormGroup({
    'files': new FormControl(null, Validators.required)
  });

  constructor(
    private service: FileHandlingService,
    private subjectService: SubjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.params.value.id;
    this.subject = this.subjectService.getSubjectContent(id);
    // this.uploadFile = new FormGroup({
    //   'files': new FormControl(null, Validators.required)
    // });
  }

  onFileAdded(event) {
    this.uploadFile['files'] = event.target.files;
    console.log(this.uploadFile);
  }

  onSubmit() {
    console.log('submitted');
    this.service.sendFiles(this.uploadFile);
  }

}
