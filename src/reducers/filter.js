const filterReducer = (state = "", action) => {
    switch (action.type) {
        case "FILTER_BY_TERM":
            return action.term;
      default:
        return state;
    }
  };

  export default filterReducer;