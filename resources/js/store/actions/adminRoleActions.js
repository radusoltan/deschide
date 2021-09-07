import Roles from "../../api/Roles"
import {
  ADMIN_ROLE,
  ADMIN_ROLE_FAILURE,
  ADMIN_ROLE_SUCCESS,
  ADMIN_ROLES,
  ADMIN_ROLES_SUCCESS
} from "../types/adminRoleTypes"

const getRoles = (page = 1) => dispatch =>{
  dispatch({
    type: ADMIN_ROLES
  })
  Roles.all(page)
  .then(r=>dispatch({
    type: ADMIN_ROLES_SUCCESS,
    payload: r.data
  }))
}
const getRole = role => dispatch => {
  dispatch({
    type: ADMIN_ROLE,
  })
  Roles.get(role)
    .then(r=>dispatch({
      type: ADMIN_ROLE_SUCCESS,
      payload: r.data
    }))
    .catch(e=>dispatch({
      type: ADMIN_ROLE_FAILURE,
      error: e.response
    }))
}



export {
  getRoles,
  getRole
}
