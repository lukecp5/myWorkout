const router = require("express").Router();
const path = require("path");
const app = require(".");

router.get("/", (req, res) =>{
      console.log(req.path);
      res.end();
})


module.exports = router