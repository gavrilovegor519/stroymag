import './Header.css'
import logo from '../media/lotop-dlya-stroitelnoy-kompanii-1024x576.jpg'
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className='Header'>
            <Link to='/'><img src={logo} alt='Логотип сайта' height='70px'/></Link>
            <ul>
                <li><Link to='/services' className='links'>Услуги</Link></li>
            </ul>
        </div>
    )
}

export default Header;