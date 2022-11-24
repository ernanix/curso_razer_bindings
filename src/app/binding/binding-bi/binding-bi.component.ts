import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-bi',
  templateUrl: './binding-bi.component.html',
  styleUrls: ['./binding-bi.component.css']
})
export class BindingBiComponent implements OnInit {
  public nome: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
