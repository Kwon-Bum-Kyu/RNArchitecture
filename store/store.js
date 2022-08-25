import { combineReducers, legacy_createStore, Reducer, Store } from "redux";
import system from "./reducers/system";
import newsData from "./reducers/newsData";

const rootReducer=combineReducers({
    system: system,
    newsData : newsData
});
const store = legacy_createStore(rootReducer);
export default store;
