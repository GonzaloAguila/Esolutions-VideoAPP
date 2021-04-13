import { combineReducers } from "redux";
import categoriesReducer from "../reducers/categories";
import videosReducer from "../reducers/videos";

export default combineReducers({
    categoriesReducer,
    videosReducer,
});