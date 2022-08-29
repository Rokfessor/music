import styles from './styles/HeaderStyles.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={styles.MainContainer}>
            <Link to="/" className={styles.Link}>
                На главную
            </Link>
            <Link to="/user" className={styles.Link}>
                Пользователь
            </Link>
        </div>
    );
}

export default Header;