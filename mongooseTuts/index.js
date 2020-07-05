const express = require('express');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');

//express app
const app = express();

//body-parser
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));

//mongoose
mongoose.connect("mongodb://localhost:27017/person");
const PersonModel = mongoose.model("person", {
    fname: String,
    lname: String
})

//routes
app.post('/person', async(req, res) => {
    try {
        let person = new PersonModel(req.body);
        let res = await person.save();
        res.send(res);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/person', async(req, res) => {});
app.get('/person/:id', async(req, res) => {});
app.put('/person/:id', async(req, res) => {});
app.delete('/person/:id', async(req, res) => {});

//port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));