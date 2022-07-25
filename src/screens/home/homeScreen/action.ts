import axios from 'axios';

export function Video_Player_Api(authToken:any,callback:Function,errorCallback:Function){
  return(dispatch:any)=>{
    axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    axios.get(`https://fivestardevapi.appskeeper.in/api/v1/user/contents?page=1`)
    .then(response=>{
      console.log("responseeeee====>",response.data.data);
      
      dispatch({type:'set_video', payload: response.data.data.result})
      callback(response)
    })
    .catch((error=>{
      console.log('eroororor',error);
      errorCallback(error)
      
    }))
  }
}
// import {Alert} from 'react-native';

// const Video_Player_Api = (
//   token:any,

//   callback: Function,
//   errorCallback: Function,
// ) => {
//     // const token = verify_Otp_Data.data.authToken;
//   return (dispatch: any) => {
//     const $https = axios.create({
//       baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     });
//      $https.defaults.headers.common.Authorization = `Bearer ${token}`;
//     axios
//       .get('https://fivestardevapi.appskeeper.in/api/v1/user/contents?page=1')
//       .then(resp => {
//         console.log('response====>>', resp.data);

//         dispatch({type: 'set_video', payload: resp.data});
//         callback(resp);
//       })
//       .catch(err => {
//         console.log('erpprprp', err);
//         errorCallback(err);
//       });
//   };
// };
// export default Video_Player_Api;
