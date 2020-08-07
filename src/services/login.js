import {fetchPost} from '../utils/http';

export async function accountLogin(params) {
  fetchPost;
  return request('/login', {
    method: 'POST',
    data: params,
  });
}
