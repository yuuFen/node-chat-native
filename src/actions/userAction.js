// import { queryCurrent, query as queryUsers } from '@/services/user';

//     *fetchCurrent(_, { call, put }) {
//       const response = yield call(queryCurrent);
//       yield put({
//         type: 'saveCurrentUser',
//         payload: response.data,
//       });
//     },

export const fetchCurrentUser = (payload) => (dispatch) => {
  queryCurrent().then((res) => {
    console.log(res);
    dispatch({
      type: 'fetchCurrentUser',
      payload: res.data,
    });
  });
};
