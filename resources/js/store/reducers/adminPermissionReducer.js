import {ADMIN_PERMISSIONS, ADMIN_PERMISSIONS_FAILURE, ADMIN_PERMISSIONS_SUCCESS} from "../types/adminPermissionType";

const initialState = {
  permissions: {},
  permission: {},
  loading: false,
  error: {}
}

const adminPermissionReducer = (state=initialState, action) => {
  switch (action.type){
    case ADMIN_PERMISSIONS:
      return {
        ...state,
        loading: true
      }
    case ADMIN_PERMISSIONS_SUCCESS:
      return {
        ...state,
        permissions: action.payload,
        loading: false
      }
    case ADMIN_PERMISSIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default adminPermissionReducer
