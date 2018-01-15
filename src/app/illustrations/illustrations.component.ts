import { Component, OnInit } from '@angular/core';
import { Illustration } from '../illustration';
import { ILLUSTRATIONS } from '../mock-illustrations';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.css']
})
export class IllustrationsComponent implements OnInit {

  illustrations = ILLUSTRATIONS;
  
  constructor() { }

  ngOnInit() {
  }

}
