import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {getByRole} from "../../../../../store/actions/adminPermissionActions"
import {getRole} from "../../../../../store/actions/adminRoleActions"

class Role extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){

    this.props.getRole(this.props.match.params.role)
    // this.props.getByRole(this.props.match.params.role)


  }
  render() {

    // const {name} = this.props.role ? this.props.role : null
    const role = !this.props.loading ? this.props.role : null

    console.log(role)


    return <Fragment>
      <h1 className="h3 mb-3">Role | </h1>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              {/*<div className="form-check form-switch">*/}
              {/*  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="checked" />*/}
              {/*    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox*/}
              {/*      input</label>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  }
}

const mapStateToProps = state => {
  return {
    role: state.adminRole.role.role,
    permissions: state.adminRole.role.permissions,
    loading: state.adminRole.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRole: role=>dispatch(getRole(role)),
    // getByRole: role=>dispatch(getByRole(role))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Role)
