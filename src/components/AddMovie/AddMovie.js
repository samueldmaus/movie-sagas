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
                <input placeholder="Image Path" value={this.state.newMovie.image} />
                <input placeholder="Description" value={this.state.newMovie.description} />
                <div className='dropdown'>
                    <ul>
                    {this.props.reduxState.genres.map(genre => (
                        <li>{genre.name}</li>
                    ))}
                    </ul>
                </div>
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