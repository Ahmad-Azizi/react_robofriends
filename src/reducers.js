import {CHANGE_SEARCH_FIELD} from './constants';

//const for searchField
//read-only, mutated through object
const initialState = {
    searchField: '' 
}

//Reducer Function for searching robots in response of action
//generic form...
//export const rootRobots = (state=initialState, action={})
export const searchRobots = (state=initialState, action={}) => {
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
