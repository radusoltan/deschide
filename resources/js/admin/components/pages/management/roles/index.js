import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {getRoles} from '../../../../../store/actions/adminRoleActions'
import Spinner from "../../../partials/Spinner"
import {Link} from "react-router-dom"
import Pagination from "react-js-pagination"
class Index extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.getRoles(1)
  }

  render() {
    const roles = this.props.roles.data?
      this.props.roles.data.map(({id,name})=><li className="list-group-item" key={id}>
        <Link to={`/admin/management/role/${id}`}>{name}</Link>
      </li>)
      :null
    const {current_page,per_page,total} = this.props.roles
    return <Fragment>
      <h1>Roles | Index</h1>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header text-end">
              <Link className="btn btn-sm btn-primary" to={'role/add'}>New Role</Link>
            </div>
            <div className="card-body">
              <Spinner show={this.props.loading} />
              <ul className="list-group list-group-flush">{roles}</ul>
              {
                total ?  <Pagination
                  totalItemsCount={total}
                  activePage={current_page}
                  itemsCountPerPage={per_page}
                  onChange={page=>this.props.getRoles(page)}
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
  return{
    roles: state.adminRole.roles,
    loading: state.adminRole.loading,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRoles: page=>dispatch(getRoles(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
