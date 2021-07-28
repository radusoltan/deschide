import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUsers} from '../../../../../store/actions/adminUserActions'
import Spinner from "../../../partials/Spinner"
import Pagination from "react-js-pagination"

class Index extends Component {

    componentDidMount(){
      this.props.getUsers(1)
      // console.log(this.props)
    }

    handlePage(page){

    }

    render() {
      const users = this.props.users.data?
        this.props.users.data.map(({id,name})=><li className="list-group-item" key={id}>
          <Link to={`/admin/management/users/${id}`}>{name}</Link>
        </li>)
        :null
      const {current_page,per_page,total} = this.props.users?this.props.users:null
      return <Fragment>
        <h1 className="h3 mb-3">Users</h1>
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <Spinner show={this.props.loading} />
                <ul className="list-group list-group-flush">
                {users}
                </ul>
                <Pagination
                  totalItemsCount={total}
                  activePage={current_page}
                  itemsCountPerPage={per_page}
                  onChange={this.handlePage()}
                />
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
