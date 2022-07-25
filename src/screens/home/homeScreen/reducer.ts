const initialState = {
    Video_data: [],
}

const HomeScreenReducer = (state = initialState, action: any) => {
    const {type,payload} = action;
    switch (type) {
        case'set_video':
            return{...state,Video_data: payload }
        default:
            return {...state}
    }
}

export default HomeScreenReducer;