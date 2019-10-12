const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const router = express.Router();
const app = express();
var opn = require("opn");

// Serve static files from dist folder
app.use(express.static(__dirname + "/dist"));

// NOTE: Whenever you want to add a page to the app
//       you should add a route here to point to
//       the generated HTML.
//
//       To generate the HTML add an entry and
//       HtmlWebpackPlugin entry to the webpack.config.js
//       file in the configuration folder
//

// Home
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/home.html"));
});
// About
router.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/about.html"));
});

//add the router
app.use("/", router);

// Listen on port
app.listen(port);

console.log("Listening on http://localhost:" + port);

// opens the url in the default browser
opn("http://localhost:" + port);
