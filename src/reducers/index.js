import { combineReducers } from 'redux';
import peopleReducer from './people.reducer';
import peopleDetailReducer from './peopleDetail.reducer';
import usersReducer from './users.reducer';

const AppReducer = combineReducers({
    people : peopleReducer,
    peopleDetail : peopleDetailReducer,
    users : usersReducer
});

export default AppReducer;
