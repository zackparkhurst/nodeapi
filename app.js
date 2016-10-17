var Sequelize = require('sequelize');

var connection = new Sequelize('node','zack','Daniel101',{
  host:'198.71.227.84'
});

var Article = connection.define('artice', {
  slug:{
    type:Sequelize.STRING,
    primaryKey:true

  },
  title: {
            type:Sequelize.STRING,
            unique: true,
            allowNull:false
          },
  body: {
          type: Sequelize.TEXT
          //defaultValue: 'Coming soon...'
        }
      },{
        timestamps: false
});

connection.sync({force: true}).then(function () {

});
