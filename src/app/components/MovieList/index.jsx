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
        <div id="movie-list">
            <h2>♡ Filmlista ♡</h2>
            <hr></hr>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie.title} <div className="icon-container">{appendStars(movie.rating)}
                        <button className="icon-container" onClick={() => handleDelete(index)}><img src='./delete.png'></img></button></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}




export default MovieList;

