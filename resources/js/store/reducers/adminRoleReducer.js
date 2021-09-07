import {
  ADMIN_ROLES_SUCCESS,
  ADMIN_ROLES,
  ADMIN_ROLES_FAILURE,
  ADMIN_ROLE,
  ADMIN_ROLE_SUCCESS, ADMIN_ROLE_FAILURE
} from '../types/adminRoleTypes'

const initialState = {
  roles:{},
  role: {},
  loading: false,
  errors: {}

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
    case ADMIN_ROLE:
      return {
        ...state,
        loading: true
      }
    case ADMIN_ROLE_SUCCESS:
      return {
        ...state,
        role: action.payload,
        loading: false
      }
    case ADMIN_ROLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default adminRoleReducer
