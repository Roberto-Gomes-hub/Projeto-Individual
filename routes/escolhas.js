var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Escolha = require('../models').Escolha;

let escolha_user = [];
let escolha_jogador = [];

router.post('/verificar', function(req, res, next) {
	console.log('Verificando se usuário possui jogador já escolhido');
	
	let instrucaoSql = `select * from escolhaJogador`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Escolha
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`); 

        for (var cont = 0; cont < resultado.length; cont++){
            if (resultado.length >= 1) {
                escolha_user.push(resultado[cont].dataValues.fkUsuario);
                console.log('Escolhas: ',escolha_user);
                escolha_jogador.push(resultado[cont].dataValues.fkJogador);
                console.log('Escolhas: ',escolha_jogador);
                res.json(resultado[0]);
            } else if (resultado.length == 0) {
                res.status(403).send('Usuário não possui jogador selecionado');
                break;
            }
        }
		
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});