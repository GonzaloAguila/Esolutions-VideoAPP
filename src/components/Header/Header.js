import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const Header = () => {
    const [theme, setTheme] = useState('light');

    const saveTheme = (theme) => {
        setTheme(theme);
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    };

    const switchTheme = () => {
        if (theme === 'light') {
            saveTheme('dark');
        } else {
            saveTheme('light');
        }
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
        setTheme(localStorage.getItem('theme'));
    }, []);

    return (
        <div className={styles.container}>
            <ul className={styles.navUl}>
                <Link className={styles.link} to='/'>
                    <li className={styles.navLiOne}>Ver Todo</li>
                </Link>
                <Link className={styles.link} to={'/categories'}>
                    <li className={styles.navLiTwo}>Categorias</li>
                </Link>
                <button className={styles.themeSwitcher} onClick={switchTheme}>
                    <Brightness4Icon></Brightness4Icon>
                </button>
            </ul>
        </div>
    );
};

export default Header;
