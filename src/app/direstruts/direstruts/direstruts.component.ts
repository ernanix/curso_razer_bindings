import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direstruts',
  templateUrl: './direstruts.component.html',
  styleUrls: ['./direstruts.component.css']
})
export class DirestrutsComponent implements OnInit {
  public mostrar:boolean = true;
  private listaCores:string[] = ["red","blue","green","yellow","navy"];
  public superhero:string="Batman"

  constructor() { }

  ngOnInit(): void {
  }

  get getListaCores(){
    return this.listaCores;
  }

}
