import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { fetchCategory } from '../../store/actions/categories';
import styles from "./styles.module.css"

const Category = ({ match }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategory(match.params.name));
    }, [dispatch]);
    const { singleCategory } = useSelector((state) => state.categoriesReducer);
    console.log(singleCategory);
    return (
        <div className={styles.videosContainer}>
            {singleCategory.videos &&
                singleCategory.videos.length > 0 &&
                singleCategory.videos.map((video) => {
                    return (
                        <VideoPlayer thumb={video.thumb} source={video.sources[0] || video.soruces[1]} title={video.title} description={video.description} />
                    );
                })}
        </div>
    );
};

export default Category;
