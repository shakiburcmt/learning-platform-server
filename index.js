const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Courses API Created');
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(course => course.id == id);
    res.send(selectedCourses);
})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectedCoursesCheckOut = courses.find(course => course.id == id);
    res.send(selectedCoursesCheckOut);
})


app.listen(port, () => {
    console.log('Learning Platform running on', port);
})