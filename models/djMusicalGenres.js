
module.exports = (sequelize, type) => {
    return sequelize.define('djMusicalGenres',{
            id: {
                type: type.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: type.UUIDV4,
                validate: {
                    notNull: true,
                    isUUID: 4,
                },
            },
            
        },

    );

}; //FIN
