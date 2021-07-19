import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  selectedFiles!: FileList;
  currentFile!: File;
  progress = 0;
  message = '';

  fileInfos!: Observable<any>

  constructor(private uploadService: UploadFileService) { }

  selectFile(event : any) {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

  upload() {
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0)!;
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total!);
          console.log(this.progress);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
        if(this.progress == 100) {
          setTimeout(function() {
            window.location.reload();
          }, 500);
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined!;
      });
    this.selectedFiles = undefined!;
  }

  refresh(): void {
    window.location.reload();
}

}
