require("dotenv").config();


const fs = require('fs')
const morgan = require('morgan')
const path = require('path')

const express = require("express");
const exphbs = require("express-handlebars");

const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;


const passport = require('passport');
require('./config/passport')(passport);
app.use(passport.initialize());

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), {
  flags: 'a'
})

// Middleware

app.use(morgan('combined', {
  stream: accessLogStream
})) // logging

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");


// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;