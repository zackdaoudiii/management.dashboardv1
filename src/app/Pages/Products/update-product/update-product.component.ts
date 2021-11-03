import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public selectedFile;
  imgURL: any;

  public onFileChanged(event) {
// img size : en kbs
    var size = Math.round(event.target.files[0].size/1024);
    if(size >3000){
      alert("Image Size " +size);
    }else{
      console.log(size);
      this.selectedFile = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event2) => {
        this.imgURL = reader.result;
      };
    }
  }

}
