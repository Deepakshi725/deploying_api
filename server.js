const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());  //Middleware to parse JSON requests

// app.get('/api', (req, res) => {
//     res.json({message: "Welcome to our API!"});

// });

app.get('/', (req, res) => {
    res.send('API is live! Access /api for API responses.');
  });
  

app.post('/api/data' , (req,res) => {
    const {name, age} = req.body;
    res.json({ message: `Hello ${name}, you are ${age} years old`});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});