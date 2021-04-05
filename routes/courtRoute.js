const router = require("express").Router();
let Court = require("../models/courtModel");

router.route("/").get((req, res) => {
	Court.find()
		.then((courts) => res.json(courts))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
	const address = req.body.address;
	const city = req.body.city;
	const province = req.body.province;
	const country = req.body.country;
	const name = req.body.name;
	const hours = req.body.hours;
	const access = req.body.access;
	const type = req.body.type;
	const hoopCount = req.body.hoopCount;
	const imageUrls = req.body.imageUrls;
	const newCourt = new Court({
		address,
		city,
		province,
		country,
		name,
		hours,
		access,
		type,
		hoopCount,
		imageUrls,
	});
	newCourt
		.save()
		.then(() => res.json(name + "court created"))
		.catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
	Recipe.findById(req.params.id)
		.then((recipe) => res.json(recipe))
		.catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").put((req, res) => {
	Recipe.findByIdAndUpdate(req.params.id, { name: req.body.name })
		.then(() => res.json("court modified"))
		.catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").delete((req, res) => {
	Recipe.findByIdAndDelete(req.params.id)
		.then(() => "court has been deleted")
		.catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
