const initialState = {
  userInfo: {},
  isLogin: false,
};
const loginReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case 'login':
    case 'fetchCurrentUser':
      return {...state, userInfo: action.state, isLogin: action.state.id != null ? true : false};
    default:
      return state;
  }
};
export default loginReducer;
