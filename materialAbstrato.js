// Definindo o objeto Carro
function Carro(modelo, ano, cor) {
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
  
    this.ligar = function() {
      console.log(this.modelo + ' ligou.');
    };
  
    this.acelerar = function() {
      console.log(this.modelo + ' está acelerando.');
    };
  
    this.frear = function() {
      console.log(this.modelo + ' está freando.');
    };
  }
  
  // Criando uma instância do objeto Carro
  const meuCarro = new Carro('Toyota Corolla', 2020, 'Prata');
  meuCarro.ligar();
  meuCarro.acelerar();
  meuCarro.frear();
  
  // Definindo o objeto Livro
  function Livro(titulo, autor, numPaginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  
    this.abrir = function() {
      console.log('Abrindo o livro: ' + this.titulo);
    };
  
    this.fechar = function() {
      console.log('Fechando o livro: ' + this.titulo);
    };
  
    this.virarPagina = function() {
      console.log('Virando a página do livro: ' + this.titulo);
    };
  }
  
  // Criando uma instância do objeto Livro
  const meuLivro = new Livro('A Origem das Espécies', 'Charles Darwin', 350);
  meuLivro.abrir();
  meuLivro.virarPagina();
  meuLivro.fechar();
  
