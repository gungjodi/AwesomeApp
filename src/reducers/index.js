import { combineReducers } from 'redux';
import peopleReducer from './people.reducer';
import peopleDetailReducer from './peopleDetail.reducer';

const AppReducer = combineReducers({
    people : peopleReducer,
    peopleDetail : peopleDetailReducer
});

export default AppReducer;
