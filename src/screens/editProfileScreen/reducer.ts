const initialState = {
  sports: [],
  zipCodeData: [],

};

const EditProfileReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case 'SET_SPORTS':
      return {...state, sports: payload};
    case 'SET_ZIPCODE':
      return {...state, zipCodeData: [...payload]}
    default:
      return state;
  }
};
export default EditProfileReducer;
