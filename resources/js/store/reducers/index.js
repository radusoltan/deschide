import {combineReducers} from "redux"
import adminAppReducer from "./adminAppReducer"
import adminUserReducer from './adminUserReducer'
import adminRoleReducer from './adminRoleReducer'
import adminPermissionReducer from './adminPermissionReducer'
import adminCategoryReducer from "./adminCategoryReducer"
import adminArticleReducer from "./adminArticleReducer";
const rootReducer = combineReducers({
  adminApp: adminAppReducer,
  adminUser: adminUserReducer,
  adminRole: adminRoleReducer,
  adminPermission: adminPermissionReducer,
  adminCategory: adminCategoryReducer,
  adminArticle: adminArticleReducer
})

export default rootReducer
