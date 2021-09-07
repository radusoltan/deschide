import {combineReducers} from "redux"
import adminAppReducer from "./adminAppReducer"
import adminUserReducer from './adminUserReducer'
import adminRoleReducer from './adminRoleReducer'
import adminPermissionReducer from './adminPermissionReducer'

const rootReducer = combineReducers({
  adminApp: adminAppReducer,
  adminUser: adminUserReducer,
  adminRole: adminRoleReducer,
  adminPermission: adminPermissionReducer
})

export default rootReducer
