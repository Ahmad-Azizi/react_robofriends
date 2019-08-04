import {CHANGE_SEARCH_FIELD} from './constants';

//action for setting searchfield
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})