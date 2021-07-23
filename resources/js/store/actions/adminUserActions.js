import {ADMIN_USERS, ADMIN_USERS_FAILURE, ADMIN_USERS_SUCCESS} from '../types/adminUserTypes'
import User from "../../api/User"

const getUsers = ()=> dispatch =>{
  dispatch({
    type: ADMIN_USERS
  })
  User.all(1)
    .then(r=>dispatch({
      type: ADMIN_USERS_SUCCESS,
      payload: r.data
    }))
    .catch(e=>dispatch({
      type: ADMIN_USERS_FAILURE
    }))
}

export {
  getUsers
}
