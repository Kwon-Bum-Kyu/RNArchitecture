import { combineReducers, legacy_createStore, Reducer, Store } from "redux";
import system from "./reducers/system";
import render from "./reducers/render";
import user from "./reducers/user";
import marketStore from "./reducers/marketStore";
const rootReducer=combineReducers({
    system: system,
    render: render,
    user: user,
    store: marketStore
});
const store = legacy_createStore(rootReducer);
export default store;
