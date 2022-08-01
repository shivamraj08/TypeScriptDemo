const initialState = {
  Search_data: [],
  Account_data:[],
  HashTag_data: [],
  Video_data: [],
};

const SearchScreenReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'set_search':
      return {...state, Search_data: payload};
    case 'update_search':
      return {...state, Search_data: payload};
    case 'set_account':
      return {...state, Account_data: payload};
    case 'update_account_search':
      return {...state, Account_data: payload}
    case 'set_hashtag':
      return {...state, HashTag_data: payload};
    case 'set_video':
      return {...state, Video_data: payload}
    default:
      return {...state};
  }
};

export default SearchScreenReducer;
