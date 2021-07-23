import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../../../../../store/actions/adminUserActions'
import Spinner from "../../../partials/Spinner"

class Index extends Component {

    componentWillMount(){
      this.props.getUsers(1)

    }

    render() {

      return <Fragment>
        <h1 className="h3 mb-3">Users</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <Spinner show={this.props.loading} />
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
export default connect(mapStateToProps,{getUsers})(Index)
