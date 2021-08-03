import Roles from "../../api/Roles"
import {ADMIN_ROLES, ADMIN_ROLES_SUCCESS} from "../types/adminRoleTypes"

const getRoles = () => dispatch =>{
  dispatch({
    type: ADMIN_ROLES
  })
  Roles.all()
  .then(r=>dispatch({
    type: ADMIN_ROLES_SUCCESS,
    payload: r.data
  }))
}

export {
  getRoles
}
