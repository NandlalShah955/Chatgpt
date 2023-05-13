import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import {registerReducer}from "./Signup/signup.reducer";
const rootreducer =combineReducers({
    signup:registerReducer,
})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk));