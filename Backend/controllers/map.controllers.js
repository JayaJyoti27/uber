const { validate } = require("../models/user.model");
const mapsService = require("../services/maps.service");
const { validationResult } = require("express-validator");
module.exports.getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array });
  }
  const { address } = req.query;
  try {
    const coordinates = await mapsService.getAddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (error) {
    res.status(500).json({ message: "coordinates not found" });
  }
};
module.exports.getDistance = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array });
    }
    const { origin, destination } = req.query;
    const distance = await mapsService.getDistance(origin, destination);
    res.status(200).json(distance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

module.exports.getSuggestions = async (req, res) => {
  try {
    // Handle validation errors properly
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { input } = req.query;

    if (!input) {
      return res.status(400).json({ message: "Input query is required" });
    }

    const suggestions = await mapsService.getSuggestions(input);
    res.status(200).json(suggestions);
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
