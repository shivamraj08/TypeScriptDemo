import axios from 'axios';

export function get_Search_Api(
  text: string,
  page: number,
  type: any,
  callback?: Function,
  errorCallback?: Function,
) {
  console.log("searching text",text)
  return (dispatch: any, getState: any) => {
    const {Search_data} = getState().SearchScreenReducer;
    // console.log('knfskjg',text,page);
    axios
      .get(
        `https://fivestardevapi.appskeeper.in/api/v1/user/search?search=${text}&type=${type}&page=${page}`,
      )
      .then(response => {
        // console.log('get search response', response?.data);
        if (page === 1) {
          dispatch({type: 'set_search', payload: response?.data?.data?.result});
        } else {
          dispatch({
            type: 'update_search',
            payload: [...Search_data, ...response?.data?.data?.result],
          });
        }
        // callback(response)
      })
      .catch(error => {
        // console.log('eroororor in searched data', error);
        // errorCallback(error)
        dispatch({type: 'set_search', payload: []});
      });
  };
}

export function get_Search_Accounts_Api(
  text: string,
  page: number,
  callback?: Function,
  errorCallback?: Function,
) {
  return (dispatch: any, getState: any) => {
    const {Account_data} = getState().SearchScreenReducer;
    axios
      .get(
        `https://fivestardevapi.appskeeper.in/api/v1/user/search?search=${text}&type=2&page=${page}`,
      )
      .then(response => {
        if (page === 1) {
          console.log('get account response', response);
          dispatch({
            type: 'set_account',
            payload: response?.data?.data?.result,
          });
        } else {
          dispatch({
            type: 'update_account_search',
            payload: [...Account_data],
          });
        }
        // callback(response)
      })
      .catch(error => {
        console.log('error in account data', error);
        // errorCallback(error)
        dispatch({type: 'set_account', payload: []});
      });
  };
}
export function get_Search_Hashtag_Api(
  text: string,
  page: number,
  callback: Function,
  errorCallback: Function,
) {
  return (dispatch: any) => {
    axios
      .get(
        `https://fivestardevapi.appskeeper.in/api/v1/user/search?search=${text}&type=3&page=${page}`,
      )
      .then(response => {
        // console.log('get hashtag response', response?.data?.data?.result);
        dispatch({type: 'set_hashtag', payload: response?.data?.data?.result});
        callback(response);
      })
      .catch(error => {
        // console.log('error in hashtag api', error);
        dispatch({type: 'set_hashtag', payload: []});
        errorCallback(error);
      });
  };
}

export function get_Search_Video_Api(
  text: string,
  page: number,
  callback: Function,
  errorCallback: Function,
) {
  return (dispatch: any) => {
    axios
      .get(
        `https://fivestardevapi.appskeeper.in/api/v1/user/search?search=${text}&type=4&page=${page}`,
      )
      .then(response => {
        // console.log('videos response', response?.data?.data?.result);
        dispatch({type: 'set_video', payload: response?.data?.data?.result});
        callback(response);
      })
      .catch(error => {
        // console.log('error in video api', error);
        dispatch({type: 'set_video', payload: []});
        errorCallback(error);
      });
  };
}
