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

jsonData: any;
list: any;

constructor(private http: HttpClient) { }

  ngOnInit() {

    // Get the paths to the images
  	this.http.get('/route/art').subscribe(data => {
    	this.jsonData = data;
    	   	// JSON.parse(this.jsonData).forEach(element => {
    	//   this.list.push(element.toString());
    	// });
  });
  }

generateArray(obj){
	return Object.keys(obj).map((key)=>{ return obj[key].toString()});
  }
}