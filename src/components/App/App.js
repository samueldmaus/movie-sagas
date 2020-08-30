import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.js';
import MovieDetails from '../MovieDetails/MovieDetails.js';
import AddMovie from '../AddMovie/AddMovie.js';
import {Grid} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

class App extends Component {
  // Renders the entire app on the DOM

  render() {
    return (
      <div className="App">
        <Router>
          <Grid className="Root">
            <h1>Movie Gallery</h1>
            <IconButton><Link to="/"><HomeRoundedIcon fontSize='large'></HomeRoundedIcon></Link></IconButton>
            <IconButton><Link to="/add"><AddBoxRoundedIcon fontSize='large'></AddBoxRoundedIcon></Link></IconButton>
          </Grid>
          
          <Route exact path="/" component={MovieList} />
          <Route exact path="/details/:id" component={MovieDetails} />
          <Route exact path="/add" component={AddMovie} />
        </Router>
        
      </div>
    );
  }
}

export default App;
