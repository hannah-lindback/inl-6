import React, { useState } from 'react';
import React from 'react';
import AddMovieForm from '../AddMovieForm';


function MovieList ({movies}) {
    return (
        <div>
            <h2> Movie list</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie.title} - Rating: {movie.rating}
                        {/* knapp för att ta bort filmen*/}
                        <button onClick={(() => handleDelete(index))}>Radera filmen</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}




export default MovieList;

