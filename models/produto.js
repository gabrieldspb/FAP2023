const { Sequelize, DataTypes } = require("sequelize");

//models/produto.js
module.exports = (Sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        nome: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        preco: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        descricao: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        }
    });

    return Produto;
};