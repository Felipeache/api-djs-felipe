module.exports = (sequelize, type) => {
    return sequelize.define('club',{
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
        name: {
            type: type.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: true,
                len: [3, 50],
            },
        },
        

    })
}
