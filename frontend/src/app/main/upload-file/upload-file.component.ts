import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileHandlingService } from 'src/services/file-handling.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  uploadFile: FormGroup;

  constructor(private service: FileHandlingService) { }

  ngOnInit() {
    this.uploadFile = new FormGroup({
      'files': new FormControl(null, Validators.required)
    });
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
