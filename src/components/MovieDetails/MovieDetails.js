import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieDetails extends Component{

    render() {
        return(
            <div>
                <h2>{this.props.reduxState.selectedMovie.title}</h2>
                <h3>Genre: {this.props.reduxState.selectedMovie.genre}</h3>
                <img src={this.props.reduxState.selectedMovie.poster} alt={this.props.reduxState.selectedMovie.title} />
                <p>{this.props.reduxState.selectedMovie.description}</p>
            </div>
        )
    }
};

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
}
export default connect(mapPropsToState)(MovieDetails);