import { actionTypes } from "../actionsTypes.constants";
// reducer with initial state
const initialState = {
    fetching: false,
    users: null,
    error: null
};

export default usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS:
            return { ...state, fetching: true, error: null };
        case actionTypes.FETCH_USERS_SUCCESS:
            return { ...state, fetching: false, users: action.data };
        case actionTypes.FETCH_USERS_ERROR:
            return { ...state, fetching: false, users: null, error: action.error };
        default:
            return state;
    }
}