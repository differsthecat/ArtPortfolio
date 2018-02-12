import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ArtBucketObject } from './artBucketObject';
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

jsonData: any;
coloredPencilKeys: any[];
oilPaintKeys: any[];
test: any[];

constructor(private http: HttpClient) { }

  ngOnInit() {

    // Get the paths to the images
  	this.http.get('/route/art').subscribe(data => {
    	this.jsonData = data;
    	JSON.parse(this.jsonData).forEach(element => {
    		this.test.push(element);
    		if (JSON.parse(element).Key.toString().includes('Colored Pencil')) {
    			this.coloredPencilKeys.push(element);
    		} else {
    			this.coloredPencilKeys.push('false');
    		}
    		if (JSON.parse(element).Key.toString().includes('Oil Paint')) {
    			this.oilPaintKeys.push(element);
    		} else {
    			this.coloredPencilKeys.push('false');
    		}
    	});
//    	for (const i in JSON.parse(this.jsonData)) {
//    		let localtest = i;
//    	};
  });
  }

//  generateArray(obj){
//	return Object.keys(obj).map((key)=>{ return obj[key].toString()});
//  }
// }
}

