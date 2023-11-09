import Movie from "./Movie"

function Main(props) {
    


    return(
        <>
    {props.moviesArray.map((movieObj)=>{
        return (
            <Movie 
            key={movieObj.id} 
            movieDetails={movieObj} 
            callbackToDelete={props.callbackToDelete}/>
            )
    })}
    </>
    );
    
};

export default Main;