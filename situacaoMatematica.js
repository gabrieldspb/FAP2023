function dividirNumeros() {
    try {
      const num1 = parseFloat(prompt('Informe o primeiro número:'));
      const num2 = parseFloat(prompt('Informe o segundo número:'));
  
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Pelo menos um dos valores informados não é um número válido.');
      }
  
      const resultado = num1 / num2;
  
      if (!isFinite(resultado)) {
        throw new Error('A divisão resultou em um valor infinito.');
      }
  
      console.log('O resultado da divisão é:', resultado);
    } catch (error) {
      console.error('Ocorreu um erro:', error.message);
    } finally {
      console.log('Execução do código finalizada.');
    }
  }
  
  dividirNumeros();
  
