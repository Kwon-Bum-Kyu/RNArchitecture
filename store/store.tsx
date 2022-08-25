import { combineReducers, legacy_createStore, Reducer, Store } from "redux";
import newsData from "./reducers/newsData";

const rootReducer: Reducer = combineReducers({
    newsData : newsData,
});
const store: Store = legacy_createStore(rootReducer);
export default store;
