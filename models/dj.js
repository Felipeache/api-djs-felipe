module.exports = (sequelize, type) => {
    return sequelize.define('dj',{
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
            url_name: {
                type: type.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notNull: true,
                    len: [3, 50],
                },
            },
            name: {
                type: type.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notNull: true,
                    len: [3, 50],
                },
            },
            biography: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    len: [3, 2000],
                },
            },
            soundcloud: {
                type: type.STRING,
                validate: {
                    len: [3, 1000],
                },
            },
            facebook: {
                type: type.STRING,
                validate: {
                    len: [3, 1000],
                },
            },
            instagram: {
                type: type.STRING,
                validate: {
                    len: [3, 1000],
                },
            },
            spotify: {
                type: type.STRING,
                validate: {
                    len: [3, 1000],
                },
            },
            beatport: {
                type: type.STRING,
                validate: {
                    len: [3, 1000],
                },
            },
            mixcloud: {
                type: type.STRING,
                validate: {
                    len: [3, 1000],
                },
            },
            youtube: {
                type: type.STRING,
                validate: {
                    len: [3, 1000],
                },
            },
            
        },

    );
}; //FIN
