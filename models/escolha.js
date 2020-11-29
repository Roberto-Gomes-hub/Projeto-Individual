'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Escolha = sequelize.define('escolhaJogador',{
		fkUsuario: {
			field: 'fkUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true
		},		
		fkJogador: {
			field: 'fkJogador',
            type: DataTypes.INTEGER,
            primaryKey: true
		}
	}, 
	{
		tableName: 'escolhaJogador', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Escolha;
};
