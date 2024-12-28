import './Header.css'
import logo from '../media/lotop-dlya-stroitelnoy-kompanii-1024x576.jpg'

function Header() {
    return(
        <div className='Header'>
            <img src={logo} alt='Логотип сайта' height='70px' />
        </div>
    )
}

export default Header;