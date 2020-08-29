import React, {Component} from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem.js';

class MovieList extends Component{
    componentDidMount() {
        this.props.dispatch({type: "FETCH_MOVIES" })
    }
    render() {
        return(
            <>
                {this.props.reduxState.movies.map(movie => (
                    <MovieListItem movie={movie} key={movie.id}/>
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