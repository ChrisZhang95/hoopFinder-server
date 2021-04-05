const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || "8000";

app.use(cors());
app.use(express.json());

// connect to MongoDB
const uri = process.env.DB_URL;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB has been connected successfully!");
});

// routes
const courtRouter = require("./routes/courtRoute");
app.use("/courts", courtRouter);

app.get("/", (req, res) => {
	res.status(200).send("serer is running");
});

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});
