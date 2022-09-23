class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota){
  this.primeiroNome = primeiroNome;
  this.segundoNome = segundoNome;
  this.primeiraNota = primeiraNota;
  this.segundaNota = segundaNota;
  }


fullname()
  {
  return this.primeiroNome +" "+ this.segundoNome
  }

media()
  {
  return (this.primeiraNota * 0,6) + (this.segundaNota * 0,4)
  }
  
situacao()
  {
    if(this.media() > 6)
      {
        return "Aprovado"
      }
    else
      {
        return "Reprovado"
      }
  }
    
}
  
var vetor = [new  Aluno("Priscila", "Souza", 9, 9),
            new Aluno("Paulo","Pereira",10,1),
            new Aluno("Claudio","Lima",4,5),
            new Aluno("Cleber","Lima",4,6),
            new Aluno("Claudia","Silva",4,9)
           ]


for (var i = 0; i < vetor.length; i++) {
  
  alert("Nome completo " + vetor[i].fullname() + "\nMedia " + vetor[i].media() + "\nSituacao " + vetor[i].situacao());
  }