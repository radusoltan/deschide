import {ADMIN_LANGUAGES, ADMIN_LANGUAGES_FAILURE, ADMIN_LANGUAGES_SUCCESS} from "../types/adminAppTypes";

const initialState = {
    languages: {},
    language: '',
    loading: false,
    error: {}
}
const adminAppReducer = (state=initialState,action)=>{

    switch (action.type){
      case ADMIN_LANGUAGES:
        return {
          ...state,
          loading: true
        }
      case ADMIN_LANGUAGES_SUCCESS:
        return {
          ...state,
          loading: false,
          languages: action.payload
        }
      case ADMIN_LANGUAGES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error
        }
      default:
        return state
    }
}
export default adminAppReducer
