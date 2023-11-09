function Movie(props) {
    
    return (
        <section className="Movie-card">
            <h2>{props.movieDetails.title}</h2>
            {props.movieDetails.imgURL ? <img src={props.movieDetails.imgURL} /> : <img src="https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg"  />}
            <h3>Rating: {props.movieDetails.rating}</h3>
            <h3>Year: {props.movieDetails.year}</h3>
            <h3>Genres: {props.movieDetails.genres.map((genre)=>{
                    return (` ${genre} `);
                    
                })}
                </h3>
            <button onClick={()=>{
                props.callbackToDelete(props.movieDetails.id)
                }}>
                    Delete this movie
                    </button>
        </section>)
}

export default Movie;