import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-bi',
  templateUrl: './binding-bi.component.html',
  styleUrls: ['./binding-bi.component.css']
})
export class BindingBiComponent implements OnInit {
  public condition: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
