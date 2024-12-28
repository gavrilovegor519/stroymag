import './Header.css'
import logo from '../media/lotop-dlya-stroitelnoy-kompanii-1024x576.jpg'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return(
        <div className='Header'>
            <img src={logo} alt='Логотип сайта' height='70px' onClick={navigate('/')} />
        </div>
    )
}

export default Header;