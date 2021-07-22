import {combineReducers} from "redux"
import adminAppReducer from "./adminAppReducer"

const rootReducer = combineReducers({
    adminApp: adminAppReducer
})

export default rootReducer
