const notesReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_NOTES":
            return action.notes;
            case "ADD_NOTE":
                return [...state, action.note];

        case "UPDATE_NOTES":
            return state.map(note => {
            if (note.id === action.note.id){
               return {...action.note}
             } else { 
              return note }
           })
        case "DELETE_NOTE":
            return state.filter(note => note.id !== action.id)
      default:
        return state;
    }
  };

  export default notesReducer;