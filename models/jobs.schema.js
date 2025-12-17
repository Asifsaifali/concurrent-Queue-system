import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["QUEUED", "PROCESSING", "COMPLETED", "FAILED"],
      default: "QUEUED",
    },

    progress: {
      type: Number,
      default: 0,
    },

    attempts: {
      type: Number,
      default: 0,
    },

    errorMessage: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);
export default Job;
