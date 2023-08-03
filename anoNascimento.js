nome = prompt("Digite o seu nome completo:");
anoNascimento = prompt("Digite o seu ano de nascimento:");

while (true){
  
    if(anoNascimento >= 1922 && anoNascimento <=2021){
    console.log("Nome:", nome);
    console.log("Idade", (2022 - anoNascimento));
    break;
  }
    else{
      console.log("Ano inválido.");
      anoNascimento = prompt("Digite o seu ano de nascimento:");
    }
}