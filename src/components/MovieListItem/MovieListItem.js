import React, {Component} from 'react';

class MovieListItem extends Component{
    render() {
        return(
            <div>
                <h3>{this.props.movie.title}</h3>
                <img src={this.props.movie.poster} alt={this.props.movie.title} />
            </div>
        )
    }
};

export default MovieListItem