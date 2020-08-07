const initialState = {
  theme: 'light',
};

const globalReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {...state, theme: state.theme === 'light' ? 'dark' : 'light'};
    default:
      return state;
  }
};
export default globalReducer;
