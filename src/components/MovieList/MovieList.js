import React, {Component} from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {IconButton} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import {Grid} from '@material-ui/core'
import './MovieList.css'

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
            <Grid container>
                {this.props.reduxState.movies.map(movie => (
                    <Grid key={movie.id} item xs={4} className="Movie">
                        <Card>
                            <img src={movie.poster} alt={movie.title}/>
                            <Typography gutterBottom variant="h5" color='textPrimary'>
                                {movie.title}
                            </Typography>
                            <IconButton onClick={()=>this.displayDetails(movie)}>
                                <InfoIcon>Details</InfoIcon>
                            </IconButton>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        )
    }
};

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
};

export default connect(mapPropsToState)(MovieList)