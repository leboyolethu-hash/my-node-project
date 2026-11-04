const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, JS) from the root directory
app.use(express.static(__dirname));

// Route for the main dashboard page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Use Render's dynamic port or fallback to 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});