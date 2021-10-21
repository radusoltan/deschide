import {
  ADMIN_USERS, 
  ADMIN_USERS_SUCCESS,
  ADMIN_USERS_FAILURE,
  ADMIN_USER_GET,
  ADMIN_USER_GET_SUCCESS,
  ADMIN_USER_GET_FAILURE,
  ADMIN_USER_ADD,
  ADMIN_USER_ADD_SUCCESS,
  ADMIN_USER_ADD_FAILURE,
  ADMIN_USER_UPDATE,
  ADMIN_USER_UPDATE_SUCCESS,
  ADMIN_USER_UPDATE_FAILURE,
  ADMIN_USER_DELETE,
  ADMIN_USER_DELETE_SUCCESS,
  ADMIN_USER_DELETE_FAILURE
  
} from '../types/adminUserTypes'

const initialState = {
  users:{},
  user: {},
  loading: false,
  error: {}

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
    case ADMIN_USERS_FAILURE :
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ADMIN_USER_ADD:
      return {
        ...state,
        loading: true
      }
    case ADMIN_USER_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case ADMIN_USER_ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ADMIN_USER_UPDATE:
      return {
        ...state,
        loading: true,
      }
    case ADMIN_USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading:false,
        user: action.payload
      }
    case ADMIN_USER_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ADMIN_USER_GET:
      return {
        ...state,
        loading: true,
        
      }
    case ADMIN_USER_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case ADMIN_USER_GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ADMIN_USER_DELETE:
      return {
        ...state,
        loading: true
      }
    case ADMIN_USER_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case ADMIN_USER_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default adminUserReducer
