import {ADMIN_ROLES_SUCCESS, ADMIN_ROLES,ADMIN_ROLES_FAILURE} from '../types/adminRoleTypes'

const initialState = {
  roles:{},
  role: {},
  loading: false,

}
const adminRoleReducer = (state=initialState, action)=>{
  switch(action.type){
    case ADMIN_ROLES:
      return {
        ...state,
        loading:true
      }
    case ADMIN_ROLES_SUCCESS:
      return {
        ...state,
        loading: false,
        roles: action.payload
      }
    default:
      return state
  }
}

export default adminRoleReducer
