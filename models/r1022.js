const Sequelize = require('sequelize');
const sequelize = require('../db');

const R1022 = sequelize.define('r1022', {
	p00: {
		primaryKey: true,
		type: Sequelize.STRING(11),
		allowNull: false
	},
  p01: {
    type: Sequelize.STRING(500)
  },
  p02: {
    type: Sequelize.STRING(500)
	},
	utv: {
		type: Sequelize.STRING(1),
		allowNull: false,
		defaultValue: 0
	},
	sp: {
		type: Sequelize.STRING(1),
		defaultValue: 0
	}
}, {
	freezeTableName: true, // Model tableName will be the same as the model name
	timestamps: false
});

module.exports = R1022;