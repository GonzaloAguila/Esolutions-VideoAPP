import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import styles from './styles.module.css';

const VideoPlayer = ({ title, description, thumb, source }) => {
    const [videoFilter, setVideoFilters] = useState({
        volume: 0.5,
        brightness: 1,
        contrast: 1,
    });
    const handleChange = (e) => {
        setVideoFilters({ ...videoFilter, [e.target.name]: e.target.value });
    };

    console.log(videoFilter);

    return (
        <div className={styles.videosItem}>
            <div className={styles.content}>
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>

            <ReactPlayer
                volume={videoFilter.volume}
                style={{ maxWidth: '100%',filter: `brightness(${videoFilter.brightness}) contrast(${videoFilter.contrast})`}}
                controls
                url={source}
                light={thumb}
            />

            <tr className={styles.volumeContainer}>
                <th>Volume</th>
                <td>
                    <input onChange={handleChange} name='volume' type='range' min='0' max='1' step='any' />
                </td>
                <th>Contrast</th>
                <td>
                    <input onChange={handleChange} name='contrast' type='range' min='0' max='2' step='any' />
                </td>
                <th>Brightness</th>
                <td>
                    <input onChange={handleChange} name='brightness' type='range' min='0' max='2' step='any' />
                </td>
            </tr>
        </div>
    );
};

export default VideoPlayer;
