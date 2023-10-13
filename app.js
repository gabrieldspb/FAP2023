const { sequelize, DataTypes, Sequelize } = require('sequelize');
const config = require('./config/produto');
const ProdutoModel = require('./models/produto');
const Sequelize = new Sequelize(config.development);
const Produto = ProdutoModel(sequelize, DataTypes);
async function run() {
    try {
        //Criação de um produto
        const produtocriado = await Produto.create({
            nome: 'Produto A',
            preco: 19.99,
            descricao: 'Descrição do Produto A'
        });
        console.log('Produto criado:', produtocriado.toJSON());

        //Leitura de produtos
        const produtos = await Produto.findAll();
        console.log('Produtos cadastrado:', produtos.map(p => p.toJSON()));

        //Atualização de um produto
        const produtoAtualizado = await Produto.update(
            {preco: 29.99},
            {where: { id: produtocriado.id}}
        );
        console.log(
            'Produto atualizado:',
            produtoAtualizado[0] > 0 ? 'Atualizado com sucesso' : 'Produto não encontrado'
        );
        // Remoção de um produto
        const produtoRemovido = await Produto.destroy({ where: { id: produtocriado.id}});
        console.log(
            'Produto removido:',
            produtoRemovido > 0 ? 'Removido com sucesso' : 'Produto não encontrado'
        );
      } catch (error) {
        console.log('erro', error.message);
      } finally{
        //Fechar a conexão com o banco de dados ao final do script
        await Produto.sequelize.close();


    }
}
run();