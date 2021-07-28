import {combineReducers} from "redux"
import adminAppReducer from "./adminAppReducer"
import adminUserReducer from './adminUserReducer'
import adminRoleReducer from './adminRoleReducer'

const rootReducer = combineReducers({
  adminApp: adminAppReducer,
  adminUser: adminUserReducer,
  adminRole: adminRoleReducer,
})

export default rootReducer
