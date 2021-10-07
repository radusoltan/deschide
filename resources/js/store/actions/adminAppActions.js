import Language from "../../api/App"
import {
  ADMIN_LANGUAGES,
  ADMIN_LANGUAGES_SUCCESS,
  ADMIN_LOGGED_USER,
  ADMIN_LOGGED_USER_FAILURE, ADMIN_LOGGED_USER_SUCCESS
} from "../types/adminAppTypes";
import User from "../../api/User";

const getLanguages = dispatch =>{
  dispatch({
    type: ADMIN_LANGUAGES
  })

  Language.all()
    .then(r=>console.log(r))

}

const getLoggedUser = user => dispatch => {

  dispatch({
    type: ADMIN_LOGGED_USER
  })

  User.get(user)
    .then(r=>dispatch({
      type: ADMIN_LOGGED_USER_SUCCESS,
      payload: r.data
    }))
    .catch(e=>dispatch({
      type: ADMIN_LOGGED_USER_FAILURE,
      error: e
    }))

}

export {
  getLoggedUser,
  getLanguages
}
