import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {getCategoryArticles} from "../../../../../../store/actions/adminCategoryAction";
import Spinner from "../../../../partials/Spinner";
import {Link} from "react-router-dom";
class Index extends Component {
  componentDidMount() {
    this.props.getCategoryArticles(this.props.match.params.category,1)

  }

  render() {
    const category = this.props.match.params.category
    const articles = this.props.articles.data ?
      this.props.articles.data.map(article=><li className="list-group-item" key={article.id}>
        <Link to={`/admin/content/${category}/${article.id}`} >{article.title}</Link>
      </li>)
      : null
    return <Fragment>
      <h1>Content | {category}</h1>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <Spinner show={this.props.loading} />
              <ul className="list-group-flush">{articles}</ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  }
}
const mapStateToProps = state => ({
  articles: state.adminCategory.articles,
  loading: state.adminCategory.loading
})
const mapDispatchToProps = dispatch => {
  return {
    getCategoryArticles: (category,page)=>dispatch(getCategoryArticles(category,page))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index)
