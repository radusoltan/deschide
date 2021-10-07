import Article from './../../api/Article'
import {ADMIN_ARTICLE, ADMIN_ARTICLE_FAILURE, ADMIN_ARTICLE_SUCCESS} from "../types/adminArticleTypes";

const get = article => dispatch => {

  dispatch({
    type: ADMIN_ARTICLE
  })

  Article.get(article)
    .then(r=>dispatch({
      type: ADMIN_ARTICLE_SUCCESS,
      payload: r.data
    }))
    .catch(e=>dispatch({
      type: ADMIN_ARTICLE_FAILURE,
      error: e
    }))

}

export {
  get
}
