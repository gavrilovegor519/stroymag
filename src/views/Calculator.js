import Footer from '../components/Footer';
import Header from '../components/Header';
import './Calculator.css';

function Calculator() {
    return (
        <>
            <Header />
            <div className='Calculator'>
                <div className='main'>
                    <h1>Калькулятор стоимости работ</h1>
                    <form action={() => alert("Отправлено на расчёт")}>
                        <input type='number' placeholder='Площадь' />
                        <input type='number' placeholder='Количество этажей' />
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Calculator;