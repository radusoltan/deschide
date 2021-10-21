import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUsers} from '../../../../../store/actions/adminUserActions'
import Spinner from "../../../partials/Spinner"
import Pagination from "react-js-pagination"

class Index extends Component {
    constructor(props) {
      super(props)
    }
    componentDidMount(){
      this.props.getUsers(1)
    }

    render() {
      const users = this.props.users.data?
        this.props.users.data.map(({id,name})=><li className="list-group-item" key={id}>
          <Link to={`/admin/management/users/${id}`}>{name}</Link>
        </li>)
        :null
      const {current_page,per_page,total} = this.props.users
      return <Fragment>
        <h1 className="h3 mb-3">Users</h1>
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header text-end">
                <Link className="btn btn-sm btn-primary" to={'user/add'}>New User</Link>
              </div>  
              <div className="card-body">
                <Spinner show={this.props.loading} />
                <div className="mb-3">
                  <ul className="list-group list-group-flush">
                    {users}
                  </ul>
                </div>
                {
                total ?  <Pagination
                  totalItemsCount={total}
                  activePage={current_page}
                  itemsCountPerPage={per_page}
                  onChange={page=>this.props.getUsers(page)}
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
const mapStateToProps = state => ({
  users: state.adminUser.users,
  loading: state.adminUser.loading
})

const mapDispatchToProps = dispatch => {
  return {
    getUsers: page=> dispatch(getUsers(page))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)
