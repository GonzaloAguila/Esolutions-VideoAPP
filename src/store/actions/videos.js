import axios from "axios";
import {
FETCH_VIDEOS,FETCH_VIDEO,
} from "../constants";

const fetchVideosCreator = (data) => ({
  type: FETCH_VIDEOS,
  data,
});

const fetchVideoCreator = (data) => ({
  type: FETCH_VIDEO,
  data,
});


export const fetchVideos = () => (dispatch) => {
    try {
        axios.get(`/api/videos`).then(({ data }) => dispatch(fetchVideosCreator(data)));
    } catch (error) {
        throw new Error(error.response);
    }
};


export const fetchVideo = (id, type) => (dispatch) => {

};
