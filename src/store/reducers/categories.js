import {
    FETCH_CATEGORY,FETCH_CATEGORIES
    } from "../constants";
    
    const initialState = {
      categories: [],
      singleCategory: {}
    };
 
    export default (state = initialState, action) => {
      switch (action.type) {
        case FETCH_CATEGORIES:
          return {...state, categories: action.data};
        case FETCH_CATEGORY:
          return {...state, singleCategory: action.data};         
        default:
          return state;
      }
  } 
