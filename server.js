const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Here, you can handle the form data (e.g., save to a database, send an email, etc.)

  // For now, let's just log the data
  console.log('Received form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Send a response to the client
  res.send('Form submission successful!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
