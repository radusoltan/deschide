import React, {Component} from 'react'
import {connect} from "react-redux"
import {getLoggedUser} from "../../../../store/actions/adminAppActions"

class Index extends Component {
  componentDidMount() {
    this.props.getLoggedUser(cookies.get('logged_user'))
  }

  render() {
        return <h1>Dash</h1>
    }
}

const mapStateToProps = state => {
  return {
    loggedUser: state.adminApp.loggedUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLoggedUser: user=>dispatch(getLoggedUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
