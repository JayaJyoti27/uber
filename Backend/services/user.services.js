const userModel = require("../models/user.model");

module.exports.createUser = async (firstName, lastName, email, password) => {
  // Log the inputs to ensure they are correct
  console.log("Inputs to createUser:", {
    fullName: { firstName, lastName },
    email,
    password,
  });

  // Validate required fields
  if (!firstName || !lastName || !email || !password) {
    throw new Error("All fields are required");
  }

  // Create the user object with correct structure
  const user = await userModel.create({
    fullName: {
      firstName: firstName,
      lastName: lastName,
    },
    email: email,
    password: password, // Ensure password is hashed before saving
  });

  return user;
};
