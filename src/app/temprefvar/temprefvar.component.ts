import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temprefvar',
  templateUrl: './temprefvar.component.html',
  styleUrls: ['./temprefvar.component.css']
})
export class TemprefvarComponent implements OnInit {
  public errorMessage:string="Nome não digitado!"
  public nome:string=""

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.nome = form.controls["nome"].value
  }

}
