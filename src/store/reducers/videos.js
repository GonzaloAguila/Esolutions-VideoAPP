import {
    FETCH_VIDEO,FETCH_VIDEOS
    } from "../constants";
    
    const initialState = {
      videos: [],
      singleVideo: {}
    };
 
    export default (state = initialState, action) => {
      switch (action.type) {
        case FETCH_VIDEOS:
          return {...state, videos: action.data};
        case FETCH_VIDEO:
          return {...state, singleVideo: action.data};         
        default:
          return state;
      }
  } 