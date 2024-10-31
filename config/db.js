const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('food_4ngr', 'jeedjad', 'gIgLxFcnlMRYIf2lbkuIlcCFQ3wlH3TI', {
host: 'dpg-csguhhbtq21c73e01k6g-a',
dialect: 'postgres',
});

module.exports = sequelize;