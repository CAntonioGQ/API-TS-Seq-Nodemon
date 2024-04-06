import { Sequelize } from "sequelize";

const db = new Sequelize('appbank', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
})

export default db