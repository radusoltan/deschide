import Category from "../../api/Category";
import {
  ADMIN_CATEGORIES,
  ADMIN_CATEGORIES_SUCCESS,
  ADMIN_CATEGORY_ARTICLES, ADMIN_CATEGORY_ARTICLES_FAILURE,
  ADMIN_CATEGORY_ARTICLES_SUCCESS
} from "../types/adminCategoryTypes";

const getCategories = ()=> dispatch => {

  dispatch({
    type: ADMIN_CATEGORIES
  })

  Category.all()
  .then(r=>dispatch({
    type: ADMIN_CATEGORIES_SUCCESS,
    payload: r.data
  }))

}

const getCategoryArticles = (category,page) => dispatch =>{
  dispatch({
    type: ADMIN_CATEGORY_ARTICLES
  })

  Category.categoryArticles(category,page)
    .then(r=>dispatch({
      type: ADMIN_CATEGORY_ARTICLES_SUCCESS,
      payload: r.data
    }))
    .catch(e=>dispatch({
      type: ADMIN_CATEGORY_ARTICLES_FAILURE,
      error: e
    }))
}

export {
  getCategories,
  getCategoryArticles
}
