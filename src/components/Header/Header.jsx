import { Link } from 'react-router-dom'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL  } from '../../context/ThemeProvider';
import styles from './Header.module.css';
import Favorite from '../Favorite';
import Darth from './img/darth.svg';
import Jedi from './img/lights.svg';
import Solo from './img/Neitral.svg';
import { useEffect, useState } from 'react';


const Header = () => {
    const [icon, setIcon] = useState(Solo)
    const isTheme = useTheme();
    useEffect(()=> {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(Jedi); break;
            case THEME_DARK: setIcon(Darth); break;
            case THEME_NEITRAL: setIcon(Solo); break;
            default: setIcon(Solo);

        }
    }, [isTheme])
    return (

        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="Star Wars"/>
            <ul className={styles.list__container}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/people/?page=1">People</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/fail">Fail</Link></li>
                <li><Link to="/not-found">Not Found</Link></li>
            </ul>
            <Favorite/>
        </div>

    )
}


export default Header;