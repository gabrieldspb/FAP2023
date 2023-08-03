
var nomes = ["Joao", "Jose", "Maria", "Bob", "Ana",
               "Sofia", "Carla", "Miguel", "Alice", "Ze"];
var idades = [45, 46, 23, 64, 33, 32, 72, 12, 18, 22];
var cores = ["azul", "branco", "cinza", "amarelo", "cinza", 
             "preto", "vermelho", "rosa", "laranja", "roxo"];


function imprimeLista(lista) {
  
  for(var i=0; i<lista.length;i++){
      console.log(lista[i]);
  }  
}

function imprimeListasCadastros(lista1, lista2, lista3) {
  
  console.log("Nome        Idade        Cor");
  for(var i=0; i<lista1.length;i++){
      console.log(lista1[i] + "      "+ lista2[i] + "      "+ lista3[i]);
  }  
}

imprimeListasCadastros(nomes, idades, cores);
idades[8]=22;
cores[5]="bege";
imprimeListasCadastros(nomes, idades, cores);
