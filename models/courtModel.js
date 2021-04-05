const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courtSchema = new Schema(
	{
		address: {
			type: String,
			required: [true, "Address is required"],
			min: [5, "Address is too short"],
			trim: true,
		},
		city: {
			type: String,
			required: [true, "City is required"],
			min: [2, "City name is too short"],
			trim: true,
		},
		province: {
			type: String,
			required: [true, "Province is required"],
			min: [2, "Province name is too short"],
			trim: true,
		},
		country: {
			type: String,
			required: [true, "Country is required"],
			min: [2, "Country name is too short"],
			trim: true,
		},
		name: { type: String, trim: true },
		hours: { type: String, trim: true },
		access: { type: String, trim: true },
		type: { type: String, trim: true },
		hoopCount: { type: Number, trim: true },
		imageUrls: { type: [String] },
	},
	{
		timestamps: true,
	}
);

const Court = mongoose.model("Court", courtSchema);

module.exports = Court;
