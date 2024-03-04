const app = require("./app");
const { DB_URI } = require("./src/config");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const connectionUri = DB_URI || 'mongodb://db/WSIE';

mongoose.connect(connectionUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log("_____________________________");
});