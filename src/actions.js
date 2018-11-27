import {
    CHANGE_SEARCH_FIELD,
    REQUEST_FRIENDS_PENDING,
    REQUEST_FRIENDS_SUCCESS,
    REQUEST_FRIENDS_FAILED
} from "./constants";

// ES6 - {return {}} == ({})
export const setSearchField = text => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});
