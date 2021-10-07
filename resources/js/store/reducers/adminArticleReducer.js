import {ADMIN_ARTICLE, ADMIN_ARTICLE_FAILURE, ADMIN_ARTICLE_SUCCESS} from './../types/adminArticleTypes'

const initialState = {
  article: {},
  loading: false,
  error: {}
}

const adminArticleReducer = (state = initialState, action) => {
  switch (action.type){
    case ADMIN_ARTICLE:
      return {
        ...state,
        loading: true
      }
    case ADMIN_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.payload
      }
    case ADMIN_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default adminArticleReducer
