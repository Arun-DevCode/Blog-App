const mongoose = require("mongoose");

// Connector
async function DBConnector() {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://arun:TjqRvTljM4SGd2PR@cluster0.ynk007h.mongodb.net/Entri-session?retryWrites=true&w=majority&appName=Cluster0"
    );

    if (!connection) {
      throw new Error("Failed to connect database");
    }

    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = DBConnector;
