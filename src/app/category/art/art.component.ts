import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ArtBucketObject } from './artBucketObject';
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';
import { element } from 'protractor';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

jsonData: any;
coloredPencilKeys: any;
oilPaintKeys: any;
test: any;
selectedIndex: -1;

constructor(private http: HttpClient) { }

  ngOnInit() {

  this.selectedIndex = -1;
  // Get the paths to the images
  this.http.get('/route/art').subscribe(data => {
    this.jsonData = data;
    console.log('data type: ' + this.jsonData.constructor.name);

    let coloredPencilKeysArray = [];
    let oilPaintKeysArray = [];

    for (var element of this.jsonData) {

      if (element.Key.includes('Colored Pencil') && !element.Key.endsWith('/')) {
        coloredPencilKeysArray.push(element.Key);
      }

      if (element.Key.includes('Oil Paint') && !element.Key.endsWith('/')) {
        oilPaintKeysArray.push(element.Key);
      }
    }

    this.coloredPencilKeys = coloredPencilKeysArray;
    this.oilPaintKeys = oilPaintKeysArray;
  });
}

expandContainer(index) {
  if (this.selectedIndex === index) {
      this.selectedIndex = -1;
  } else {
    this.selectedIndex = index;
  }
}

getExpanderClass(index) {
    if (this.selectedIndex === -1) {
      return 'container';
    } else if (this.selectedIndex === index) {
      return 'selected-container';
    } else {
      return 'not-selected-container';
    }
  }
}

