import Logo from '../UI/logo/Logo';
import './_MenuOpen.scss';
import { useEffect } from 'react';

const MenuOpen = ({ menuState }) => {

    return (
                <>
                <div className={menuState ? 'back active' : 'back'}>
                    <div className="open__blure">
                            <div className="menu__inner">
                                <div className="nemu__container">
                                    <div className="menu__logo-holder">
                                        <Logo/>
                                    </div>
                                    <div className="menu__list-holder">
                                        <ul className='menu__list'>
                                            <li className='menu__item'><a href="#home">Home</a></li>
                                            <li className='menu__item'><a href="#about">About</a></li>
                                            <li className='menu__item'><a href="#services">Services</a></li>
                                            <li className='menu__item'><a href="#contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                </>
    )
}

export default MenuOpen;
