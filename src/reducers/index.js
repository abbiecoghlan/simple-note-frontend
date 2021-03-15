import { combineReducers } from 'redux';
import notesReducer from './notes'
import userReducer from './user'
import filterReducer from "./filter"
import activeNoteReducer from "./activeNote"

const rootReducer = combineReducers({
    notes: notesReducer,
    user: userReducer,
    filter: filterReducer,
    activeNote: activeNoteReducer
  });

  export default rootReducer