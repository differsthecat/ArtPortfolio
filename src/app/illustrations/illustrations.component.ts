import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.css']
})
export class IllustrationsComponent implements OnInit {

  illustration = 'Succulents';	

  constructor() { }

  ngOnInit() {
  }

}
