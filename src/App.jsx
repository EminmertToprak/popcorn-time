import { useState } from 'react'
import movies from "./data/movies.json"
import Header from './components/Header'
import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [image, setImage] = useState("")

  const deleteMovie = (movieTitle) => {
    const newList = moviesToDisplay.filter((movieDetail)=>{
        return movieDetail.title !== movieTitle; 
    });
    setMoviesToDisplay(newList)
    
}

const handleSubmit = (e) => {
  e.preventDefault();

  const newMovie = {
    title: title,
    rating: rating,
    imgURL: image,
  }

  const newList = [newMovie, ...moviesToDisplay];
  setMoviesToDisplay(newList);
  setTitle("")
  setRating("")
  setImage("")
}


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length}/>

    <section className='box'>
      <h2>Add your own movie:</h2>
      <form onSubmit={handleSubmit} action="">
        <label>Title:
        <input 
        type="text" 
        name="title" 
        placeholder='Enter The Title' 
        required={true}
        value={title} 
        onChange={(e)=>{setTitle(e.target.value)}}/>
        </label>  
      </form>
      
      <form onSubmit={handleSubmit} action="">
      <label>Rating:
        <input 
        type="number" 
        min={1}
        max={10}
        name="rating" 
        placeholder='Enter The Rating'
        required={true}
        value={rating} 
        onChange={(e)=>{setRating(e.target.value)}}/>
      </label>
      </form>
      
      <form onSubmit={handleSubmit} action="">
      <label>Image Url:
        <input 
        type="url" 
        name="image" 
        placeholder='Enter The Image URL'
        required={true}
        value={image}
        onChange={(e)=>{setImage(e.target.value)}}/>
        <br />
        <button>Create Movie</button>
        </label>
      </form>
    </section>

      <Main moviesArray={moviesToDisplay} callbackToDelete={deleteMovie}/>
      <Footer />
    </>
  )
}

export default App
