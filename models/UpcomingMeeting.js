import mongoose from 'mongoose';

const upcomingMeetingSchema = new mongoose.Schema({
  upcomingMeeting_name: {
    type: String,
    unique: false,
    required: true
  },
  upcomingMeeting_image: {
    type: String,
    required: true
  },
  upcomingMeeting_price: {
    type: Number,
    required: true
  },
  upcomingMeeting_detail: {
    type: String,
    required: true
  },
  upcomingMeeting_date: {
    type: String,
    required: true
  }
}, { timestamps: true });

const UpcomingMeeting = mongoose.model('UpcomingMeeting', upcomingMeetingSchema);

export default UpcomingMeeting;
