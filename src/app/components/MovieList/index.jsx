import React, { useState } from 'react';
import './styles.css';



function MovieList({ movies, setMovies }) {
    
    //här ska vi skicka in movies
    const handleDelete = (index) => {
        const updatedMovies = [...movies];
        updatedMovies.splice(index, 1);
        setMovies(updatedMovies);
    }

    //gör om rating-värde till stjärnor
    const appendStars = (rating) => {
        const stars = [];

        for (let i = 0; i < parseInt(rating); i++) {
            stars.push(<img key={i} src="./star.png" alt="star" />);

        }
        return stars;



    };



    
    return (
        <div>
            <h2> Movie list</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie.title} {appendStars(movie.rating)}
                        <button onClick={() => handleDelete(index)}>Radera filmen</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}




export default MovieList;

