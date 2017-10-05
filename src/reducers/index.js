import cameras from './cameras';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    cameras,
    form: formReducer
});
export default rootReducer;
