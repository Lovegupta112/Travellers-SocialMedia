import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import postReducer from "./postReducer";


const rootReducer=combineReducers({
     fetchState:fetchReducer,
     postState:postReducer
})


export default rootReducer;