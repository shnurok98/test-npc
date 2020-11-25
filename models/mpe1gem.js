const Sequelize = require('sequelize');
const sequelize = require('../db');

const Mpe1gem = sequelize.define('mpe1gem', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		type: Sequelize.INTEGER
	},
	npp: {
		type: Sequelize.INTEGER
	},
	r1022: {
		type: Sequelize.STRING(11),
		references: {
			model: 'r1022',
			key: 'p00'
		}
	},
	naim_org: {
		type: Sequelize.STRING(1000)
	},
	adr_fact: {
		type: Sequelize.STRING(1000)
	},
	inn: {
		type: Sequelize.STRING(100)
	},
	plazma_max: {
		type: Sequelize.DECIMAL(17, 6)
	},
	plazma_cena: {
		type: Sequelize.DECIMAL(17, 6)
	},
	erm_max: {
		type: Sequelize.DECIMAL(17, 6)
	},
	erm_cena: {
		type: Sequelize.DECIMAL(17, 6)
	},
	immg_max: {
		type: Sequelize.DECIMAL(17, 6)
	},
	immg_cena: {
		type: Sequelize.DECIMAL(17, 6)
	},
	alb_max: {
		type: Sequelize.DECIMAL(17, 6)
	},
	alb_cena: {
		type: Sequelize.DECIMAL(17, 6)
	}
}, {
	freezeTableName: true,
	timestamps: false,
	schema: 'minzdrav'
});

// tableName: 'table'

module.exports = Mpe1gem;