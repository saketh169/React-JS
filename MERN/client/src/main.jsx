import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useParams } from 'react-router-dom';
import App from './App.jsx';
import axios from 'axios';
import './index.css';

// Components
export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <>
      <h1>Movie List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}

export function About() {
  const [data, setData] = useState({ title: '', description: '' });

  useEffect(() => {
    axios.get('/api/about')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching about:', error));
  }, []);

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </>
  );
}

export function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
      <p>Contact us at movies@app.com.</p>
    </>
  );
}

export function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get('/api/movies')
      .then(response => {
        const foundMovie = response.data.find(m => m.id === parseInt(id));
        setMovie(foundMovie || { title: 'Movie Not Found' });
      })
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  return (
    <>
      <h1>Movie Detail</h1>
      <p>{movie ? movie.title : 'Loading...'}</p>
    </>
  );
}

// Nested Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="movies">
        <Route index element={<Home />} />
        <Route path=":id" element={<MovieDetail />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);