import { CHANGE_SEARCH_FIELD } from './constants';

// {return {}} == ({})
export const setSearchField = (text) => ({
        type: CHANGE_SEARCH_FIELD,
        payload: text
})