const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

let DB_URI = `mongodb://${host}:${port}/WSIE`;

if (process.env.MONGO_DB_URI) {
  DB_URI = process.env.MONGO_DB_URI;
}

module.exports = {
  DB_URI,
};
