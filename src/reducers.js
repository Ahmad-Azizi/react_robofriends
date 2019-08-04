import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED
} from './constants';

//const for searchField
//read-only, mutated through object
const initialStateSearch = {
    searchField: ''
}

//Reducer Function for searching robots in response of action
//generic form...
//export const rootRobots = (state=initialState, action={})
export const searchRobots = (state=initialStateSearch, action={}) => {
    //console.log(`${action.type} ${action.payload}`);
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            //return { ...state, searchField: action.payload }
            //same thing! 
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const initialStateRobots= {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending:false});
        default:
            return state;
    }
}