export class Aluno {
    private nome: string;
    private idade:number;

    constructor(nome:string,idade:number) {
        this.nome = nome;
        this.idade = idade;
    }
    get nomeAluno(){
        return this.nome;
    }

    get idadeAluno(){
        return this.idade
    }


}