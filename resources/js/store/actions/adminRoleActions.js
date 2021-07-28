import Roles from "../../api/Roles"
import {ADMIN_ROLES} from "../types/adminRoleTypes"

const getRoles = ()=> dispatch =>{
  dispatch({
    type: ADMIN_ROLES
  })
  Roles.all(1)
    .then(r=>console.log(r))
}

export {
  getRoles
}
