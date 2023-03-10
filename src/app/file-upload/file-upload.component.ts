import { Component, OnInit} from '@angular/core';
import { DataServeService } from '../data-serve.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // constructor(private service: DataServeService){}
  // ngOnInit(): void {
  //   window.onscroll = function (){
  //     scrollTo()
  //   }
  // }

  //  button:any = document.getElementById("mybutton");
  //  scrollTo()
  // {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  //   {
  //     this.button.style.display = "block";
  // } else {
  //   this.button.style.display = "none";
  // }
  // }

  //  topFunction() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

  // data(val:any)
  // {
  //   this.service.dataService(val).subscribe(
  //     (result)=>{
  //       console.warn(result)
  //     }
  //   )
  // }
}
