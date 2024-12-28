import Footer from '../components/Footer';
import Header from '../components/Header';
import './Contacts.css';
import image from '../media/hsdjh.png';

function Contacts() {
    return (
        <>
            <Header />
            <div className='Contacts'>
                <div className='main'>
                    <h1>Контакты</h1>
                    <p>Адрес: г. Москва, ул. Примерная д. 10</p>
                    <p>Телефон: 8 (999) 177-17-17</p>
                    <p>Электронная почта: info@architecturecomfort.ru</p>
                    <h2>Часы работы:</h2>
                    <p>Пн - Пт: 10:00 - 19:00</p>
                    <p>Сб: 10:00 - 16:00</p>
                    <p>Вс: выходной</p>
                    <h2>Форма обратной связи</h2>
                    <form action={() => alert("Сообщение отправлено")}>
                        <input type='text' placeholder='ФИО' />
                        <input type='email' placeholder='E-Mail' />
                        <textarea placeholder='ФИО' />
                        <button>Отправить</button>
                    </form>
                    <h2>Карта</h2>
                    <img src={image} alt='Карта' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contacts;