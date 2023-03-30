const initialState={
    users:[],
}
export const usersReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_ALL_USERS': return{
            ...state,
            users: action.payload.users,
        }
        default: return state
    }
}