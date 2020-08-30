import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import './AddMovie.css';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button'
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel'

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
                <TextField name='title' label="Title" value={this.state.title} onChange={this.handleChange}/>
                <br/>
                <TextField name='poster' label="Image Path/URL" value={this.state.poster} onChange={this.handleChange}/>
                <br/>
                <TextField multiline rows={6} name='description' label="Description" value={this.state.description} onChange={this.handleChange} />
                <br/>
                <FormControl >
                    <InputLabel>Genre</InputLabel>
                    <NativeSelect label='Genre' id='add_genre' onChange={this.selectedId}>
                        <option aria-label="None" value="" />
                        {this.props.reduxState.genres.map(genre=> (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))}
                    </NativeSelect>
                </FormControl>
                <br/>
                <br/>
                <Button variant="contained" color="secondary" type='submit'>Add Movie</Button>
                <Button variant="contained" color="secondary" onClick={this.cancelAdd}>Cancel</Button>
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