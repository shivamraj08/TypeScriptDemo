const initialState = {
  sports: [],
  zipCodeData: [],
  Complete_profile:[]
};

const EditProfileReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  
  switch (type) {
    case 'SET_SPORTS':
      return {...state, sports: payload};
    case 'SET_ZIPCODE':
      return {...state, zipCodeData: [...payload]};
      case 'SET_COMPLETE':
        return {...state, Complete_profile:payload};

    default:
      return state;
  }
};
export default EditProfileReducer;
