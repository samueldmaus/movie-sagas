import React, {Component} from 'react';
import { connect } from 'react-redux';

// component to display movies
class MovieList extends Component{
    componentDidMount() {
        this.props.dispatch({type: "FETCH_MOVIES" })
    };

    displayDetails = (movie) => {
        console.log(movie);
        this.props.dispatch({type: "SELECTED_MOVIE", payload: movie});
        this.props.history.push(`/details/${movie.id}`);
    }

    render() {
        return(
            <>
                {this.props.reduxState.movies.map(movie => (
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img onClick={()=>this.displayDetails(movie)} src={movie.poster} alt={movie.title} />
                    </div>
                ))}
            </>
        )
    }
};

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
};

export default connect(mapPropsToState)(MovieList)