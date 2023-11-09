import Movie from "./Movie"

function Main(props) {
    


    return(
        <>
    {props.moviesArray.map((movieObj, i)=>{
        return (
            <Movie 
            key={i} 
            movieDetails={movieObj} 
            callbackToDelete={props.callbackToDelete}/>
            )
    })}
    </>
    );
    
};

export default Main;