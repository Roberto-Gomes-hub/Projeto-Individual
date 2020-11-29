var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Jogador = require('../models').Jogador;

let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/mostrar', function(req, res, next) {
	console.log('Selecionando todos os Jogadores');
	
	let instrucaoSql = `select * from jogador`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Jogador
	}).then(resultado => {
        console.log(`Encontrados: ${resultado.length}`); 
        
        for (var cont = 0; cont < resultado.length; cont++) {
            if (resultado.length >= 1) {
                sessoes.push(resultado[0].dataValues.nomeJogador);
                console.log('Jogador: ',sessoes);
                res.json(resultado[0]);
            } else if (resultado.length == 0) {
                res.status(403).send('Não existem jogadores registrados');
            } else {
                res.status(403).send('Mais de um mesmo jogador registrado!');
            }
        }
		
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});