import './Header.css';
import logo from '../logo.webp';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className='Header'>
            <Link to='/'><img src={logo} alt='Логотип сайта' height='70px'/></Link>
            <ul>
                <li><Link to='/services' className='links'>Услуги</Link></li>
                <li><Link to='/about' className='links'>О нас</Link></li>
                <li><Link to='/contacts' className='links'>Контакты</Link></li>
                <li><Link to='/calculator' className='links'>Калькулятор стоимости</Link></li>
            </ul>
        </div>
    )
}

export default Header;