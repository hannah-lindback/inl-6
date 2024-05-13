import AddMovieForm from "../components/AddMovieForm";
import Movie from "../components/Movie";
import Movies from "../components/Movies";
import OrderByAlphaButton from "../components/OrderByAlphaButton";
import OrderByGradeButton from "../components/OrderByGradeButton";
import MovieApplication from "../components/MovieApplication";
import React from "react";

export default function Home() {
  return (

    <MovieApplication>
      <AddMovieForm />

      <Movies>
          <Movie />
          <Movie />
          <Movie />
      </Movies>

      <OrderByAlphaButton />
      <OrderByGradeButton></OrderByGradeButton>
    </MovieApplication>
  );
}
