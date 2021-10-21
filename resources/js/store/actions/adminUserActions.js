import {
  ADMIN_USERS,
  ADMIN_USERS_FAILURE,
  ADMIN_USERS_SUCCESS,
  ADMIN_USER_ADD,
  ADMIN_USER_ADD_SUCCESS,
  ADMIN_USER_ADD_FAILURE,
  ADMIN_USER_GET,
  ADMIN_USER_GET_SUCCESS,
  ADMIN_USER_GET_FAILURE,
  ADMIN_USER_DELETE,
  ADMIN_USER_DELETE_SUCCESS,
  ADMIN_USER_DELETE_FAILURE,
  ADMIN_USER_UPDATE,
  ADMIN_USER_UPDATE_SUCCESS,
  ADMIN_USER_UPDATE_FAILURE
} from '../types/adminUserTypes'
import User from "../../api/User"

const getUsers = (page=1) => dispatch =>{
  dispatch({
    type: ADMIN_USERS
  })
  User.all(page)
    .then(r=>dispatch({
      type: ADMIN_USERS_SUCCESS,
      payload: r.data
    }))
    .catch(e=>dispatch({
      type: ADMIN_USERS_FAILURE
    }))
}

const getUser = user => dispatch => {
  dispatch({
    type: ADMIN_USER_GET
  })
  User.get(user)
  .then(res=>dispatch({
    type: ADMIN_USER_GET_SUCCESS,
    payload: res.data
  }))
  .catch(err=>dispatch({
    type: ADMIN_USER_GET_FAILURE,
    payload: err.responseJSON
  }))
}

const addUser = data => dispatch =>{
  dispatch({
    type: ADMIN_USER_ADD
  })
  User.add(data)
  .then(res=>dispatch({
    type: ADMIN_USER_ADD_SUCCESS,
    payload: res.data
  }))
  .catch(err=>dispatch({
  type: ADMIN_USER_ADD_FAILURE,
  payload: err.response.data
  }))
}

const updateUser = (user, data) => dispatch => {
  dispatch({
    type: ADMIN_USER_UPDATE
  })
  User.update(user, data)
  .then(res=>dispatch({
    type: ADMIN_USER_UPDATE_SUCCESS,
    payload: res.data
  }))
  .catch(err=>dispatch({
    type: ADMIN_USER_UPDATE_FAILURE,
    payload: err
  }))
}

const deleteUser = user => dispatch => {
  dispatch({
    type: ADMIN_USER_DELETE
  })
  User.delete(user)
  .then(res=>dispatch({
    type: ADMIN_USER_DELETE_SUCCESS,
    payload: res.data
  }))
  .catch(err=>dispatch({
    type: ADMIN_USER_DELETE_FAILURE,
    payload: err
  }))
}

export {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser
}
