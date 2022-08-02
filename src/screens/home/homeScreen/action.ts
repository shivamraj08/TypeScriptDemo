import axios from 'axios';

export function Video_Player_Api(
  authToken: any,
  callback: Function,
  errorCallback: Function,
) {
  return (dispatch: any) => {
    axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    axios
      .get(`https://fivestardevapi.appskeeper.in/api/v1/user/contents?page=1`)
      .then(response => {
        dispatch({type: 'set_video', payload: response.data.data.result});
        callback(response);
      })
      .catch(error => {
        console.log('eroororor', error);
        errorCallback(error);
      });
  };
}
