const express = require('express');
const MovieData = require("../service/MovieData");
const router = express.Router();

router.get("/", (req, res, next) => {
	let data = new MovieData(req.uow);
	data.getAll(result => {
		res.render("index", {data: result});
	});
});

module.exports = router;
