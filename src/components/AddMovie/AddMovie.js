import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class AddMovie extends Component {
    state = {

        title: '',
        poster: '',
        description: '',
        genre_id: '',
        
    };

    componentDidMount() {
        this.props.dispatch({type: "FETCH_GENRES"});
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    };

    selectedId = () => {
        this.setState({
            ...this.state,
            genre_id: document.getElementById('add_genre').value
        })
    }

    addMovie = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios.post('/api/movie', this.state)
        .then(response => {
            console.log('ADDED TO DB');
            this.setState({
                title: '',
                poster: '',
                description: '',
                genre_id: '',
            })
            this.props.history.push('/');
        }).catch(error => {
            console.log('error in POST:', error)
        })
    };

    cancelAdd = (event) => {
        event.preventDefault();
        this.setState({
            title: '',
            poster: '',
            description: '',
            genre_id: '',
        });
        this.props.history.push('/');
    }
        


    render() {
        return (
            <form onSubmit={this.addMovie}>
                <input name='title' placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
                <input name='poster'placeholder="Image Path/URL" value={this.state.poster} onChange={this.handleChange}/>
                <input name='description' placeholder="Description" value={this.state.description} onChange={this.handleChange} />
                
                <select id='add_genre' onChange={this.selectedId}>
                    {this.props.reduxState.genres.map(genre=> (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    ))}
                </select>
                <button type='submit'>Add Movie</button>
                <button onClick={this.cancelAdd}>Cancel</button>
            </form>
        )
    }
}

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
}
export default connect(mapPropsToState)(AddMovie);