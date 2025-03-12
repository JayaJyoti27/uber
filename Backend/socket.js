const socketIo = require("socket.io");
const userModel = require("./models/user.model");
const captainModel = require("./models/captain.model");
const RideModel = require("./models/ride.model");
let io;

function initializeSocket(server) {
  io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`✅ Client connected: ${socket.id}`);

    // Join Event: Assign socketId to user or captain
    socket.on("join", async (data) => {
      const { userId, userType } = data;

      if (!userId || !userType) {
        console.error("❌ Invalid join data received:", data);
        return;
      }

      try {
        let updatedUser;
        if (userType === "user") {
          updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { socketId: socket.id },
            { new: true }
          );
        } else if (userType === "captain") {
          updatedUser = await captainModel.findByIdAndUpdate(
            userId,
            { socketId: socket.id },
            { new: true }
          );
        }

        if (updatedUser) {
          console.log(`🚀 Updated ${userType} with socketId: ${socket.id}`);
        } else {
          console.log(`⚠️ No ${userType} found for ID: ${userId}`);
        }
      } catch (error) {
        console.error("❌ Error updating socketId:", error);
      }
    });

    // Update Captain Location
    socket.on("update-location-captain", async (data) => {
      const { userId, location } = data;

      if (
        !userId ||
        !location ||
        typeof location.ltd !== "number" ||
        typeof location.lng !== "number"
      ) {
        console.error("❌ Invalid location data received:", data);
        return;
      }

      try {
        await captainModel.findByIdAndUpdate(
          userId,
          {
            $set: {
              "vehicle.location.ltd": location.ltd,
              "vehicle.location.lng": location.lng,
              socketId: socket.id, // Ensure socketId updates
            },
          },
          { new: true }
        );
      } catch (error) {
        console.error("❌ Error updating captain location:", error);
      }
    });

    // Handle Disconnection
    socket.on("disconnect", async () => {
      console.log(`❌ Client disconnected: ${socket.id}`);

      try {
        await captainModel.updateMany(
          { socketId: socket.id },
          { $unset: { socketId: 1 } }
        );
        await userModel.updateMany(
          { socketId: socket.id },
          { $unset: { socketId: 1 } }
        );
        console.log(`🗑️ Removed socketId for disconnected clients`);
      } catch (error) {
        console.error("❌ Error clearing socketId:", error);
      }
    });

    // Captain Accepts Ride
    socket.on("ride-accepted", async (data) => {
      const { rideId, captainId } = data;

      if (!rideId || !captainId) {
        console.error("❌ Invalid ride acceptance data received:", data);
        return;
      }

      try {
        // Find the captain to get socketId
        const captain = await captainModel.findById(captainId);
        if (!captain) {
          console.error("❌ Captain not found:", captainId);
          return;
        }

        // Find the ride and update its status
        const ride = await RideModel.findByIdAndUpdate(
          rideId,
          { status: "accepted", captainId },
          { new: true }
        ).populate("userId"); // Get user details

        if (!ride) {
          console.error("❌ Ride not found:", rideId);
          return;
        }

        console.log(`✅ Captain ${captainId} accepted ride ${rideId}`);

        // Send ride details to the user
        if (ride.userId && ride.userId.socketId) {
          sendMessageToSocketId(ride.userId.socketId, {
            event: "ride-accepted",
            data: {
              rideId: ride._id,
              captainId: captain._id,
              captainName: captain.name,
              vehicle: captain.vehicle,
              pickup: ride.pickup,
              dropoff: ride.dropoff,
              fare: ride.fare,
            },
          });

          console.log(
            `📨 Ride accepted notification sent to user ${ride.userId._id}`
          );
        } else {
          console.warn(`⚠️ User has no socketId`);
        }
      } catch (error) {
        console.error("❌ Error processing ride acceptance:", error);
      }
    });
  });
}

// ✅ Function to send message to a specific socket ID
function sendMessageToSocketId(socketId, message) {
  if (io && socketId) {
    io.to(socketId).emit(message.event, message.data);
    console.log(`📨 Message sent to socket ${socketId}`);
  } else {
    console.error(`❌ Failed to send message, invalid socket ID: ${socketId}`);
  }
}

// ✅ Function to send ride request to captains
function sendRideRequestToCaptains(captainsInRadius, rideWithUser) {
  captainsInRadius.forEach((captain) => {
    if (captain.socketId) {
      console.log(
        `📡 Sending ride to captain ${captain._id} at socket: ${captain.socketId}`
      );

      sendMessageToSocketId(captain.socketId, {
        event: "new-ride",
        data: rideWithUser,
      });

      console.log(`✅ Ride event sent to captain ${captain._id}`);
    } else {
      console.warn(`⚠️ Captain ${captain._id} has no socketId`);
    }
  });
}

module.exports = {
  initializeSocket,
  sendMessageToSocketId,
  sendRideRequestToCaptains,
};
