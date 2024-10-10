import './_Accost_style.scss';

const Accost = () => {

    return (
        <>
            <div className="accost">
                <div className="accost__bg">
                    <div className="accost__block">
                        <div className="accost__title-holder">
                            <h2 className="accost__title">Ви завітали до <span className='red-color'>" ПОДІЛЛЯ-ІНВЕСТ СІТІ "</span></h2>
                        </div>
                        <div className="accost__text-holder">
                            <div className="accost__text">
                            Перевірена будівельна компанія, 
                            з якою ви матимете можливість отримати хороший сервіс, 
                            широкий спектр послуг та конкурентоспроможно найкращу ціну.
                            </div>
                        </div>
                        <div className="accost__button-holder">
                            <button className="accost__button">Зв'язатись</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accost;