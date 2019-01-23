const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3005;
const app = express();
//const apiRoutes = require("./routes/apiRoutes");
const routes = require("./routes");

const mongoose = require("mongoose");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
app.use(express.static("client/build"));

var mongoURL = process.env.MONGODB_URI || "mongodb://localhost/article_db";

mongoose.connect(
  mongoURL,
  { useNewUrlParser: true }
);

// Use routes
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("/tom", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
