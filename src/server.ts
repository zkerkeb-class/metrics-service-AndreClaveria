import app from "./app";
import { config } from "./config";
import mongoose from "mongoose";

const PORT = config.port || 3000;

mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
