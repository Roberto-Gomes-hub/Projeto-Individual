'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Noticia = sequelize.define('noticia',{
		idNoticia: {
			field: 'idNoticia',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		descricao: {
			field: 'descricao',
			type: DataTypes.STRING,
			allowNull: false
		},
		dataNoticia: {
			field: 'dataNoticia',
			type: DataTypes.DATE,
			allowNull: false
		},
		linkNoticia: {
			field: 'linkNoticia',
			type: DataTypes.STRING,
			allowNull: false
        },
        fkJogador: {
            field: 'fkJogador',
            type: DataTypes.INTEGER,
            allowNull: false
        }
	}, 
	{
		tableName: 'noticia', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Noticia;
};
