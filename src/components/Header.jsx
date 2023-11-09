import "../css/Header.css"

function Header(props) {
    
   

    return(
        <header className="Header">
    <h1>Welcome to Popcorn Time</h1>
    {props.numberOfMovies > 0
    ? <h2> We currently have {props.numberOfMovies} movies.</h2>
    : <h2>Unfortunately, we don't have any movies right now.</h2>
    }
    <hr />
    </header>
)}

export default Header;