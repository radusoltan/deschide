import React, {Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {getCategories} from '../../../../../store/actions/adminCategoryAction'
import Spinner from './../../../partials/Spinner'
import {Link} from "react-router-dom";
class Index extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const categories = this.props.categories ?
      this.props.categories.map(({id,name,slug})=><li className="list-group-item" key={id}>
        <Link to={`/admin/content/${id}/articles`}>{name}</Link>
      </li>)
      : null

    return <Fragment>
      <h1>Content | Categories | Index</h1>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <Spinner show={this.props.loading} />
              <ul className="list-group list-group-flash">
                {categories}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>

  }
}

const mapStateToProps = state => {
  return {
    categories: state.adminCategory.categories,
    loading: state.adminCategory.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: page=>dispatch(getCategories(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
