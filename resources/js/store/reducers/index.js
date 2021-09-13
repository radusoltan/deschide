import {combineReducers} from "redux"
import adminAppReducer from "./adminAppReducer"
import adminUserReducer from './adminUserReducer'
import adminRoleReducer from './adminRoleReducer'
import adminPermissionReducer from './adminPermissionReducer'
import adminCategoryReducer from "./adminCategoryReducer"
const rootReducer = combineReducers({
  adminApp: adminAppReducer,
  adminUser: adminUserReducer,
  adminRole: adminRoleReducer,
  adminPermission: adminPermissionReducer,
  adminCategory: adminCategoryReducer
})

export default rootReducer
