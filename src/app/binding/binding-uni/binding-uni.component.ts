import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-uni',
  templateUrl: './binding-uni.component.html',
  styleUrls: ['./binding-uni.component.css']
})
export class BindingUniComponent implements OnInit {
  private nome: string = "Ernani";
  constructor() { }

  ngOnInit(): void {
  }

  get meunome(): string {
    return this.nome;
  }

  public getValor (): number {
    return 10 + 40;
  }

}
