import { useState } from 'react'
import movies from "./data/movies.json"
import Header from './components/Header'
import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    console.log("Deleting movie with id " + movieId)
    const newList = moviesToDisplay.filter((movieDetail)=>{
        return movieDetail.id !== movieId; 
    });
    console.log(newList)
    setMoviesToDisplay(newList)
    
}

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length}/>
      <Main moviesArray={moviesToDisplay} callbackToDelete={deleteMovie}/>
      <Footer />
    </>
  )
}

export default App
