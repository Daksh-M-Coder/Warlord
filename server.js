const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve PDF files from the 'pdfs' directory
app.use('/pdfs', express.static(path.join(__dirname, 'pdfs')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
