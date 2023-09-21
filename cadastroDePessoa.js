function exibirDados() {
    const nome = document.getElementById("nome").value;
    const salario = parseFloat(document.getElementById("salario").value);
    const idade = parseInt(document.getElementById("idade").value);
    const possuiDiploma = document.getElementById("possuiDiploma").checked;
  
    const dadosExibidos = document.getElementById("dadosExibidos");
    dadosExibidos.innerHTML = `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Salário:</strong> ${salario}</p>
      <p><strong>Idade:</strong> ${idade}</p>
      <p><strong>Possui Diploma:</strong> ${possuiDiploma ? "Sim" : "Não"}</p>
    `;
  }
  
