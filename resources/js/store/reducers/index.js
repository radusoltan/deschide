import {combineReducers} from "redux"
import adminAppReducer from "./adminAppReducer"
import adminUserReducer from './adminUserReducer'

const rootReducer = combineReducers({
  adminApp: adminAppReducer,
  adminUser: adminUserReducer
})

export default rootReducer
