const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Sample movies data
const movies = [
  { id: 1, title: 'Inception' },
  { id: 2, title: 'The Matrix' },
  { id: 3, title: 'Interstellar' },
  { id: 4, title: 'The Dark Knight' },
  { id: 5, title: 'Pulp Fiction' },
   { id: 6, title: 'Spider Man' },
   { id: 7, title: 'Invisible man' }
];

// Backend routes
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/about', (req, res) => {
  res.json({ title: 'About Page', description: 'This is the about page for the movie app.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));