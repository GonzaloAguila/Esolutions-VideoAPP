import React, { useEffect } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import styles from './styles.module.css';
import { fetchCategories } from '../../store/actions/categories';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../store/actions/videos';

const Main = () => {
    const dispatch = useDispatch();
    const { videos } = useSelector((state) => state.videosReducer);

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchVideos());
    }, [dispatch]); 

    return (
        <>
        <div className={styles.videosContainer}>
            {videos &&
                videos.length > 0 &&
                videos.map((video) => {
                    return (
                        <VideoPlayer thumb={video.thumb} source={video.sources[0] || video.soruces[1]} title={video.title} description={video.description} />
                    );
                })}
        </div>
        </>
    );
};

export default Main;
