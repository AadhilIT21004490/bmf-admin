import { ENV } from "../configs/env.js";
import Fleet from "../models/fleet.model.js";
import Vendor from "../models/vendor.model.js";
import { generateFleetId } from "../utils/generateFleetId.js";

export const createFleet = async (req, res) => {
  try {
    let {
      model,
      manufacturer,
      yom,
      vehicleType,
      transmission,
      fuelType,
      description,
      doors,
      seats,
      kmPerDay,
      luggageCapacity,
      amenities,
      priceTable,
      images,
    } = req.body;

    const requiredFields = [
      { key: "model", label: "Model" },
      { key: "manufacturer", label: "Manufacturer" },
      { key: "yom", label: "Year of Manufacture" },
      { key: "vehicleType", label: "Vehicle Type" },
      { key: "transmission", label: "Transmission" },
      { key: "fuelType", label: "Fuel Type" },
      { key: "description", label: "Description" },
      { key: "doors", label: "Doors" },
      { key: "seats", label: "Seats" },
      { key: "kmPerDay", label: "Km/Day" },
      { key: "luggageCapacity", label: "Luggage Capacity" },
      { key: "amenities", label: "Amenities" },
      { key: "priceTable", label: "Price Table" },
      // { key: "images", label: "Images" },
    ];

    let missingField = null;
    for (const field of requiredFields) {
      if (!req.body[field.key]) {
        missingField = field.label;
      }
    }

    if (missingField) {
      return res.status(400).json({
        error: `${missingField} is required`,
        message: `${missingField} is required`,
        success: false,
      });
    }

    if (typeof luggageCapacity === "string") {
      try {
        luggageCapacity = JSON.parse(luggageCapacity);
      } catch (e) {
        return res.status(400).json({
          error: "Invalid luggageCapacity format",
          message: "Invalid luggageCapacity format",
          success: false,
        });
      }
    }

    const uploadedFiles = req.files;
    if (!uploadedFiles || uploadedFiles.length === 0) {
      return res.status(400).json({
        error: "Images are required",
        message: "Images are required",
        success: false,
      });
    }
    const imagePaths = uploadedFiles.map(
      (file) => `${ENV.FILEPATH}/${file.filename}`
    );
    const fleetId = await generateFleetId();

    const newFleet = new Fleet({
      fleetId,
      vendor: req.user._id,
      model,
      manufacturer,
      yom,
      vehicleType,
      transmission,
      fuelType,
      description,
      doors,
      seats,
      kmPerDay,
      luggageCapacity,
      amenities,
      priceTable,
      images: imagePaths,
    });

    await newFleet.save();

    await Vendor.updateOne(
      { _id: req.user._id },
      { $push: { fleets: newFleet._id } }
    );

    return res.status(201).json({
      fleet: newFleet,
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
      success: false,
    });
  }
};

export const getfleets = async (req, res) => {
  try {
    const user = req.user;

    const fleets = await Fleet.find({ vendor: user._id });

    return res.status(200).json({
      fleets,
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
      success: false,
    });
  }
};
