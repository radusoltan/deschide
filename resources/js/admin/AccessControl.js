import React from "react"
import {connect} from "react-redux"

const checkPermissions = (userPermissions,allowedPermissions) => {
  if (allowedPermissions.length === 0){
    return true;
  }

  return userPermissions.some(permission =>
    allowedPermissions.includes(permission)
  )
}

const AccessControl = ({
  userPermissions,
  allowedPermissions,
  children,
  renderNoAccess
}) => {
  console.log(userPermissions)
  // console.log(allowedPermissions)
  const permitted = checkPermissions(userPermissions,allowedPermissions)
  if (permitted){
    return children
  }
  return renderNoAccess
}

AccessControl.defaultProps = {
  allowedPermissions: [],
  userPermissions: [],
  renderNoAccess: ()=>null
}

export default connect(state=>({
  userPermissions: state.adminApp.loggedUser && state.adminApp.loggedUser.permissions
}))(AccessControl)
