import React, {Component} from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {IconButton} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info'
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
        const useStyles = makeStyles(theme => ({
            root: {
                
            }
        }))
        return(
            <div>
                {this.props.reduxState.movies.map(movie => (
                    <Card key={movie.id}>
                        <img src={movie.poster} alt={movie.title}/>
                        <Typography gutterBottom variant="h5" color='textPrimary'>
                            {movie.title}
                        </Typography>
                        <IconButton onClick={()=>this.displayDetails(movie)}>
                            <InfoIcon>Details</InfoIcon>
                        </IconButton>
                    </Card>
                ))}
            </div>
        )
    }
};

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
};

export default connect(mapPropsToState)(MovieList)