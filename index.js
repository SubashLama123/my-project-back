import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import Course from './models/Course.js';
import Meeting from './models/Meeting.js';
import Message from './models/Message.js';
import UpcomingMeeting from './models/UpcomingMeeting.js';

const port = 5000;
const app = express();

mongoose.connect('mongodb+srv://lamasubaah2:moles900@cluster0.vzpci.mongodb.net/Education').then((val) => {
  app.listen(port, () => {
    console.log('connected server is running');
  });
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: 'welcome to the backs jee',
  });
});



// api for courses 



app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find({}).sort('-createdAt');
    return res.status(200).json(courses);
  } catch (err) {
    return res.status(400).json(`${err}`);
  }
});


app.post('/api/courses', async (req, res) => {
  try {
    const courses = await Course.create(req.body);
    return res.status(200).json('add success');
  } catch (err) {
    return res.status(400).json(`${err}`);
  }
});



// for delete

app.delete('/api/courses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Course deleted successfully' });
  } catch (err) {
    return res.status(400).json(`${err}`);
  }
});

// for update
app.put('/api/courses/:id', async (req, res) => {
  try {
    const courseId = req.params.id;
    const updatedCourse = await Course.findByIdAndUpdate(courseId, req.body, { new: true });
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});









app.get('/api/meetings', async (req, res) => {
  try {
    const meetings = await Meeting.find({}).sort('-createdAt');
    return res.status(201).json(meetings);
  } catch (err) {
    return res.status(400).json(`${err}`);
  }
});



app.post('/api/meetings', async (req, res) => {
  try {
    const meetings = await Meeting.create(req.body);
    return res.status(201).json(meetings);
  } catch (err) {
    return res.status(400).json(`${err}`);
  }
});









app.get('/api/upcomingMeetings', async (req, res) => {
  try {
    const upcomingMeetings = await UpcomingMeeting.find({}).sort('-createdAt');
    return res.status(201).json(upcomingMeetings);
  } catch (err) {
    return res.status(400).json(`${err}`);
  }
});

app.post('/api/upcomingMeetings', async (req, res) => {
  console.log(req.body);
  try {
    await UpcomingMeeting.create(req.body);
    return res.status(201).json('add success');
  } catch (err) {
    console.log(err)
    return res.status(400).json(`${err}`);
  }
});





app.get('/api/messages', async (req, res) => {
  try {
    const response = await Message.find({});
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(`${err}`);
  }
});

app.post('/api/messages', async (req, res) => {
  try {
    await Message.create(req.body);
    return res.status(200).json('successfully send');
  } catch (err) {
    return res.status(400).json(`${err}`);
  }
});

export default app;
