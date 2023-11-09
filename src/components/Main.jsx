import { useState } from "react";
import movies from "../data/movies.json"
import Movie from "./Movie"

function Main() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
    
    const deleteMovie = (movieId) => {
        console.log("Deleting movie with id " + movieId)
        const newList = moviesToDisplay.filter((movieDetail)=>{
            return movieDetail.id !== movieId; 
        });
        console.log(newList)
        setMoviesToDisplay(newList)
        
    }

    let message = "";
    if (moviesToDisplay.length > 0) {
        message = `We currently have ${moviesToDisplay.length} movies.`
    } else if (moviesToDisplay.length === 0) {
       message = `Unfortunately, there are no movies right now.` 
    }

    return(
        <>
    <h1>{message}</h1>
    {moviesToDisplay.map((movieObj)=>{
        return (
            <Movie 
            key={movieObj.id} 
            movieDetails={movieObj} 
            callbackToDelete={deleteMovie}/>
            )
    })}
    </>
    );
    
};

export default Main;