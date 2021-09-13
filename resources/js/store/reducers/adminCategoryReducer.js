import {
  ADMIN_CATEGORIES,
  ADMIN_CATEGORIES_FAILURE,
  ADMIN_CATEGORIES_SUCCESS,
  ADMIN_CATEGORY_ARTICLES, ADMIN_CATEGORY_ARTICLES_FAILURE, ADMIN_CATEGORY_ARTICLES_SUCCESS
} from "../types/adminCategoryTypes";

const initialState = {
  categories: [],
  category: {},
  articles: {},
  loading: false,
  error: {}
}

const adminCategoryReducer = (state=initialState, action)=>{
  switch (action.type){
    case ADMIN_CATEGORIES:
      return {
        ...state,
        loading:true
      }
    case ADMIN_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload
      }
    case ADMIN_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case ADMIN_CATEGORY_ARTICLES:
      return {
        ...state,
        loading: true
      }
    case ADMIN_CATEGORY_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload
      }
    case ADMIN_CATEGORY_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default adminCategoryReducer
