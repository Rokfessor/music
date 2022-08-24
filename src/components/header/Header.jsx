import styles from './styles/HeaderStyles.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className={styles.MainContainer}>
            <Link to="/user">
                Пользователь
            </Link>
        </div>
    );
}

export default Header;