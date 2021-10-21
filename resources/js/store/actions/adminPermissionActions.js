import Permissions from "../../api/Permissions"
import {ADMIN_PERMISSIONS, ADMIN_PERMISSIONS_FAILURE, ADMIN_PERMISSIONS_SUCCESS} from "../types/adminPermissionType";
import {ADMIN_ROLES} from "../types/adminRoleTypes";

const getPermissions = (page=1)=> dispatch=>{
  dispatch({
    type: ADMIN_PERMISSIONS
  })
  Permissions.allPaginated(page)
  .then(r=>dispatch({
    type: ADMIN_PERMISSIONS_SUCCESS,
    payload: r.data
  }))
  .catch(e=>dispatch({
    type: ADMIN_PERMISSIONS_FAILURE,
    error: e.response
  }))
}
const getAll = ()=> dispatch => {
  dispatch({
    type: ADMIN_PERMISSIONS
  })
  Permissions.all()
    .then(r=>dispatch({
      type: ADMIN_PERMISSIONS_SUCCESS,
      payload: r.data
    }))
    .catch(e=>dispatch({
      type: ADMIN_PERMISSIONS_FAILURE,
      error: e.response
    }))
}
const getByRole = role => dispatch => {
  dispatch({
    type: ADMIN_PERMISSIONS,
  })

  Permissions.getAllByRole(role)
    .then(r=>dispatch({
      type: ADMIN_PERMISSIONS_SUCCESS,
      payload: r.data
    }))
    .catch(e=>dispatch({
      type: ADMIN_PERMISSIONS_FAILURE,
      error: e.response
    }))

}

export {
  getPermissions,
  getAll,
  getByRole
}
