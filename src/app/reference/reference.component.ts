import { Component, OnInit } from '@angular/core';

class Item {
    name: string;
}

const data = [
    { name: "Work" }
]

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
    items: Item[];

  constructor() { 
      this.items = data;
  }

  ngOnInit() {
  }

}
