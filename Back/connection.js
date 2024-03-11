const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:asdF0987@localhost:5432/db1237')

async function connect() {
    try {
        await sequelize.authenticate()
        console.log('db connected');
    }
    catch (error) {
        console.log(`error: {error}`);
    }
}
connect()

module.exports = { sequelize }