import React from 'react';


function OrderByGrade({ movies, setMovies }) {

    const sortRating = () => {
        const sortedMovies = [...movies];
        sortedMovies.sort((a, b) => b.rating - a.rating);
        setMovies(sortedMovies);
    }

    return (
        <div>
            <button onClick={sortRating}>Sortera efter betyg</button>
        </div>
        );
}

export default OrderByGrade;