import Roles from "../../api/Roles"
import {ADMIN_ROLES, ADMIN_ROLES_SUCCESS} from "../types/adminRoleTypes"

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


export {
  getRoles
}
