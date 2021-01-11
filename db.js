const Sequelize = require('sequelize');
const DjsModel = require('./models/dj');
const Clubs = require('./models/clubs');
const DjMusicalGenres = require('./models/djMusicalGenres');
const MusicalGenres = require('./models/musicalGenres');


const sequelize = new Sequelize(
        'djs_api_felipe',
        'djs_api_felipe',
        'djs_api_felipe',
    {
        host: 'db4free.net',
        dialect:'mysql'
    }

);

const Club = Clubs(sequelize, Sequelize);
const DjModel = DjsModel(sequelize, Sequelize);
const DjMusicalGenre = DjMusicalGenres(sequelize, Sequelize);
const MusicalGenre = MusicalGenres(sequelize, Sequelize);

sequelize.sync({force:false})
    .then(() => {
        console.log("All the tables are synced my lord")
    })

module.exports={
    Club,
    DjModel,
    DjMusicalGenre,
    MusicalGenre
};
