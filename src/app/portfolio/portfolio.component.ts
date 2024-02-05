import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  titleportfolio:string="portfolio component";
  imgsrc:string[]=["assets/poert1.png","assets/port2.png","assets/port3.png","assets/poert1.png","assets/port2.png","assets/port3.png"]
  // imgsrc:string[]=["assets/poert1.png","assets/port2.png","assets/port3.png","assets/poert1.png","assets/port2.png","assets/port3.png"]

  clicked:boolean=false;
   largimg:any;
        onImageClick(imageSrc: string) {
          // Your logic when an image is clicked
  
  
  this.clicked=true;
  this.largimg=imageSrc;
          this.displayLargeImage(imageSrc);
        }
  
        displayLargeImage(imageSrc: string):string {
  
  
     return imageSrc;
        }
  
        fade(){
          this.clicked=false
        }
  


}
