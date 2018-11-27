import {
    CHANGE_SEARCH_FIELD,
    REQUEST_FRIENDS_PENDING,
    REQUEST_FRIENDS_SUCCESS,
    REQUEST_FRIENDS_FAILED
} from "./constants";

const initialStateSearch = {
    searchField: ""
};

const initialStateFriends = {
    friends: [],
    isPending: false,
    error: ''
}

export const searchFriends = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
};

export const requestFriends = (state = initialStateFriends, action = {}) => {
    switch (action.type) {
        case REQUEST_FRIENDS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_FRIENDS_SUCCESS:
            return Object.assign({}, state, {
                friends: action.payload,
                isPending: false
            });
        case REQUEST_FRIENDS_FAILED:
            return Object.assign({}, state, {
                error: action.payload,
                isPending: false
            });
        default:
            return state;
    }
};
