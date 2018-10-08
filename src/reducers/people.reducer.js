import { actionTypes } from "../actionsTypes.constants";
// reducer with initial state
const initialState = {
    fetching: false,
    people: null,
    error: null
};

export default peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PEOPLE:
            return { ...state, fetching: true, error: null };
        case actionTypes.FETCH_PEOPLE_SUCCESS:
            return { ...state, fetching: false, people: action.data };
        case actionTypes.FETCH_PEOPLE_ERROR:
            return { ...state, fetching: false, people: null, error: action.error };
        default:
            return state;
    }
}