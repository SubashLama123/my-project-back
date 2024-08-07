import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  meeting_name: {
    type: String,
    required: true
  },
  meeting_detail: {
    type: String,
    unique: true,
    required: true
  },

  meeting_image: {
    type: String,
    required: true
  },
  meeting_price: {
    type: Number,
    required: true
  },
  meeting_date: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Meeting = mongoose.model('Meeting', meetingSchema);

export default Meeting;
