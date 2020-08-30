import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddMovie extends Component {
    state = {
        newMovie: {
            title: '',
            image: '',
            description: '',
            genre: ''
        }
    };

    componentDidMount() {
        this.props.dispatch({type: "FETCH_GENRES"});
    }

    render() {
        return (
            <div>
                <input placeholder="Title" value={this.state.newMovie.title} />
                <input placeholder="Image Path/URL" value={this.state.newMovie.image} />
                <input placeholder="Description" value={this.state.newMovie.description} />
                <form>
                    <select name='add_genre'>
                        {this.props.reduxState.genres.map(genre=> (
                            <option key={genre.id} value={genre.name}>{genre.name}</option>
                        ))}
                    </select>
                </form>
                <button>Add Movie</button>
            </div>
        )
    }
}

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
}
export default connect(mapPropsToState)(AddMovie);