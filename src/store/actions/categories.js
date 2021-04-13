import axios from 'axios';
import { FETCH_CATEGORIES, FETCH_CATEGORY } from '../constants';

const fetchCategoriesCreator = (data) => ({
    type: FETCH_CATEGORIES,
    data,
});

const fetchCategoryCreator = (data) => ({
    type: FETCH_CATEGORY,
    data,
});

export const fetchCategory = (name) => (dispatch) => {
    try {
        axios.get(`/api/categories/${name}`).then(({ data }) => dispatch(fetchCategoryCreator(data)));
    } catch (error) {
        throw new Error(error.response);
    }
};

export const fetchCategories = () => (dispatch) => {
    try {
        axios.get(`/api/categories`).then(({ data }) => dispatch(fetchCategoriesCreator(data.categories)));
    } catch (error) {
        throw new Error(error.response);
    }
};
