const activeNoteReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_NOTE":
            return action.note;
        case "UPDATE_NOTES":
            return action.note
        case "DELETE_NOTE":
            return null
      default:
        return state;
    }
  };
  export default activeNoteReducer;
  
