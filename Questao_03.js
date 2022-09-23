var nome = ["João Silva", "Mario Junior", "Cleber Toguro"]
var nota1 = [7, 6, 4];
var nota2 = [3, 6, 9];


for (var i = 0; i < nome.length; i++) {
  
  var mult1 = nota1[i] * 0.6;
  
  var mult2 = nota2[i] * 0.4;
  
  var soma = mult1 + mult2;
  
  alert("Nome do aluno = " + nome[i] + "\nNota 1: " + nota1[i] + "\nNota 2: " + nota2[i]);
  
  alert("Nome do aluno = " + nome[i] + "\nNota Final: " + soma);

}