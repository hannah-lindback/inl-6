"use client";
import React, { useState } from 'react';
import AddMovieForm from './components/AddMovieForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import OrderByAlpha from './components/OrderByAlpha';
import OrderByGrade from './components/OrderByGrade';
import './styles.css';


export default function Home() {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  }
  return (
    <div> 
      <AddMovieForm addMovie={addMovie} />
      <MovieList movies={movies} setMovies={setMovies} />
      <OrderByAlpha movies={movies} setMovies={setMovies} />
      <OrderByGrade movies={movies} setMovies={setMovies} />
    </div>
  );
}

