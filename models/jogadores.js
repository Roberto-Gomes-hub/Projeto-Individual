'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Jogador = sequelize.define('jogador',{
		idJogador: {
			field: 'idJogador',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeJogador: {
			field: 'nomeJogador',
			type: DataTypes.STRING,
			allowNull: false
		},
		timeJogador: {
			field: 'timeJogador',
			type: DataTypes.STRING,
			allowNull: false
		},
		fotoJogador: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'jogador', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Jogador;
};
