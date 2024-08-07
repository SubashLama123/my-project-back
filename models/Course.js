import mongoose from "mongoose";



const courseSchema = new mongoose.Schema({

  course_name: {
    type: String,
    required: true
  },

  course_image: {
    type: String,
    required: true
  },
  course_price: {
    type: Number,
    required: true
  },

  rating: {
    type: String,
    default: 0
  },




}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);


export default Course;
