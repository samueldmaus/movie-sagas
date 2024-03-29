import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery("FETCH_MOVIES", fetchMovies);
    yield takeEvery("FETCH_GENRES", fetchGenres)
};

function* fetchMovies() {
    try{
        let movieResponse = yield axios.get('/api/movie');
        yield put({type: 'SET_MOVIES', payload: movieResponse.data})
    }catch(error) {
        console.log('error in movie GET:', error)
    }
}

function* fetchGenres() {
    try {
        let movieGenres = yield axios.get('/api/genre');
        yield put({type: 'SET_GENRES', payload: movieGenres.data})
    }catch(error) {
        console.log('error in genre GET:', error)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const selectedMovie = (state = {}, action) => {
    if(action.type === 'SELECTED_MOVIE') {
        return action.payload
    }

    return state
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
