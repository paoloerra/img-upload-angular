import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  list! : any[];

  constructor(private uploadService: UploadFileService) {
    this.getAllImage(); 
  }

  ngOnInit(): void {
  }

  getAllImage() {
    const onsucces = (result:any)=>{
      this.list = result;
      console.log(result);
    }
    const onerror=()=>{
      console.log("errore");
    }
    this.uploadService.getFiles().subscribe(onsucces,onerror);  
  }

  
}
