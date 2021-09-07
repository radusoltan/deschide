import React, {Component, Fragment} from 'react'
import {connect} from "react-redux"
import {getPermissions} from "../../../../../store/actions/adminPermissionActions"
import Spinner from "../../../partials/Spinner";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";


class Index extends Component {
  componentDidMount() {
    this.props.getPermissions(1)
  }

  render() {

    const permissions = this.props.permissions.data?
      this.props.permissions.data.map(({id,name})=><li className="list-group-item" key={id}>
        <Link to={`/admin/management/permission/${id}`}>{name}</Link>
      </li>)
      :null
    const {current_page,per_page,total} = this.props.permissions

    return <Fragment>
      <h1 className="h3 mb-3">Permissions | Index</h1>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <Spinner show={this.props.loading} />
              <div className="mb-3">
                <ul className="list-group list-group-flush">
                  {permissions}
                </ul>
              </div>
              {
                total ?  <Pagination
                  totalItemsCount={total}
                  activePage={current_page}
                  itemsCountPerPage={per_page}
                  onChange={page=>this.props.getPermissions(page)}
                  itemClass={'page-item'}
                  linkClass={'page-link'}
                  hideFirstLastPages={true}
                  prevPageText={<i className="fas fa-arrow-circle-left"/>}
                  nextPageText={<i className="fas fa-arrow-circle-right"/>}
                  innerClass={'pagination justify-content-center'}
                /> : null
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  }
}

const mapStateToProps = state => {
  return {
    permissions: state.adminPermission.permissions,
    loading: state.adminPermission.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPermissions: page=>dispatch(getPermissions(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
