require('dotenv').config();


const config = {
    port: process.env.PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    pathUpload: process.env.PATH_UPLOAD,
    pathApp: process.env.PATH_APP
}

module.exports = config;