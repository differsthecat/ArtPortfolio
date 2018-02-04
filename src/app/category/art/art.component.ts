import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

images: any;

constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.http.get('/route/art').subscribe(data => {
    this.images = data;
  });
  }

}
