import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,  // Change this to String to store actual message content
    required: true
  },
  subject: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

export default Message;
