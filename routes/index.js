// + Import express to be used for routing
const express = require('express');

// + Import the two routers(API & HTML)
const htmlRoutes = require("./html-routes");
const apiRoutes = require("./api-routes");

// + Create an app instance so that we can use the express router
const app = express();

// + Any API routes that need to be handled by the router go to the apiRoutes file, all other requests go to the htmlRoutes file
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// + Export app so that the router extends throughout the entire application
module.exports = app;