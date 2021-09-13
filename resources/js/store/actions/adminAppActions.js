import Language from "../../api/App"
import {ADMIN_LANGUAGES, ADMIN_LANGUAGES_SUCCESS} from "../types/adminAppTypes";

const getLanguages = dispatch =>{
  dispatch({
    type: ADMIN_LANGUAGES
  })

  Language.all()
    .then(r=>console.log(r))

}

export {
  getLanguages
}
