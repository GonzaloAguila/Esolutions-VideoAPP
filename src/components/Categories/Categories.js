import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { fetchCategories, fetchCategory } from '../../store/actions/categories';
import styles from './styles.module.css';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import LocalDiningRoundedIcon from '@material-ui/icons/LocalDiningRounded';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

const Categories = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.categoriesReducer);

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <div className={styles.catContainer}>
            {categories &&
                categories.length > 0 &&
                categories.map((category) => {
                    return (
                        <Link to={`/categories/${category.name}`}>
                         <button className={styles.btn}>
                            <div className={styles.category}>
                                {category.name === 'videogames' ? <SportsEsportsRoundedIcon fontSize='large' color='primary' /> : null}
                                {category.name === 'music' ? <PlayCircleFilledRoundedIcon fontSize='large' color='primary' /> : null}
                                {category.name === 'cocina' ? <LocalDiningRoundedIcon fontSize='large' color='primary' /> : null}
                                {category.name === 'tutoriales' ? <GroupRoundedIcon fontSize='large' color='primary' /> : null}
                                {category.name === 'coding' ? <CodeRoundedIcon fontSize='large' color='primary' /> : null}
                                <h2>{category.name}</h2>
                            </div>
                        </button>
                        </Link>
                    );
                })}
        </div>
    );
};

export default Categories;
