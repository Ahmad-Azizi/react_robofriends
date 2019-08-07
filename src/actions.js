import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED
} from './constants';


//action object for setting searchfield
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

//Asyn/Ajax calls (users/robots data) through middleware, to execute funtions
export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: user}))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}