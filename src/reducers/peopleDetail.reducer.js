import { actionTypes } from "../actionsTypes.constants";
// reducer with initial state
const initialState = {
    fetching: false,
    peopleDetail: null,
    error: null
};

export default peopleDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PEOPLE_DETAIL:
            return { ...state, fetching: true, error: null };
        case actionTypes.FETCH_PEOPLE_DETAIL_SUCCESS:
            return { ...state, fetching: false, peopleDetail: action.data };
        case actionTypes.FETCH_PEOPLE_DETAIL_ERROR:
            return { ...state, fetching: false, peopleDetail: null, error: action.error };
        default:
            return state;
    }
}