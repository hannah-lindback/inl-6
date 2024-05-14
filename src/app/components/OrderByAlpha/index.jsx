import React from 'react';
import { setMovies } from 'react';


function OrderByAlpha({ movies, setMovies }) {

    const sortAlfabetic = () => {
        const sortedMovies = [...movies];
        sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sortedMovies);
    }

    return (
        <div>
            <button onClick={sortAlfabetic}>Sortera Alfabetiskt</button>
        </div>
        );
}

export default OrderByAlpha;