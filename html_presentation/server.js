// Import required modules
const express = require('express');
const app = express();
const { importWasm } = require('../wasm');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Load wasm and prepare to pass it to the template
let wasmLog = []

importWasm((log) => {
  wasmLog.push(log)
});

app.get('/getWasmLog', (req, res) => {
    // Send the wasmLog as JSON
    res.json(wasmLog);
});

// Define a route to render HTML
app.get('/', (req, res) => {
  // Render the 'index.ejs' file and pass data to it
  res.render('index', { wasmLog });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
