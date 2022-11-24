import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno';
 @Component({
  selector: 'app-binding-uni',
  templateUrl: './binding-uni.component.html',
  styleUrls: ['./binding-uni.component.css']
})
export class BindingUniComponent implements OnInit {
  private nome: string = "Ernani";
  public alunos : Aluno[] = [];
  public cor :string = "blue";
  public html:string = "<h1><i>Ulalá!</i></h1>"
  private event:string="";

  constructor() {
  }

  ngOnInit(): void {
    this.alunos.push(new Aluno("Josue",10));
    this.alunos.push(new Aluno("Maria",11));
    this.alunos.push(new Aluno("Clovis",9));
    this.alunos.push(new Aluno("Matilda",10));
  }

  get meunome(): string {
    console.log("oi")
    return this.nome;
  }

  public getValor (): number {
    return 10 + 40;
  }

  public mudaNome(newNome:string) {
    this.nome = newNome;
  }

  get getevent() {
    return this.event;
  }
  public evento($event : Event) {
    this.event = $event.type
  }

}
