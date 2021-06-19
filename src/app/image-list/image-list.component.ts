import { ImageServiceService } from './../shared/image-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  images: any[] = [];

  searchQuery: any;
  
  constructor(private imageservice : ImageServiceService) { 
  }

  handleSuccess(data: any){
    this.images = data.hits;
    //console.log(data)
  }

  searchImages(search: any){
    this.imageservice.getData(search).subscribe(
      data => this.handleSuccess(data),
      error => console.log(error)
    )
  }

  ngOnInit(): void {

  }

}
