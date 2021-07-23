import {ADMIN_USERS, ADMIN_USERS_SUCCESS} from '../types/adminUserTypes'

const initialState = {
  users:{},
  user: {},
  loading: false,

}
const adminUserReducer = (state=initialState, action)=>{
  switch(action.type){
    case ADMIN_USERS:
      return {
        ...state,
        loading: true
      }
    case ADMIN_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    default:
      return state
  }
}

export default adminUserReducer
