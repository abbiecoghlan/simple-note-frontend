const userReducer = (state = false, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return action.currentUser
        case "LOGOUT_USER":
            return false
        default:
            return state;
    }
  };

  export default userReducer;