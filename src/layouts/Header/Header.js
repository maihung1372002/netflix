
import styled from './Header.module.css';
import {Link} from 'react-router-dom';
import {FaRegBell, FaSearch} from 'react-icons/fa';

import clsx from 'clsx';


function Header() {

    return (
        <div className={styled.wrap}>
            <div className={clsx('grid','wide')}>
                <div className='row'>
                    <div className={styled.logo}>
                        <img src='./Netflix-manner.png'/>
                    </div>
                    <div className={styled.nav}>
                        <ul className={styled.listNav}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/movies'>Movies</Link>
                            </li>
                            <li>
                                <Link to='/blogs'>Blog</Link>
                                <ul className={clsx(styled.subNav,'brBot')}>
                                    <li className={styled.subNavItem}>
                                        <Link to='/'>Blog</Link>
                                    </li>
                                    <li className={styled.subNavItem}>
                                        <Link to='/'>Blog details</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/blogs'>Blog</Link>
                                <ul className={clsx(styled.subNav,'brBotRight')}>
                                    <li className={styled.subNavItem}>
                                        <Link to='/'>Blog</Link>
                                    </li>
                                    <li className={styled.subNavItem}>
                                        <Link to='/'>Blog details</Link>
                                        <ul className={clsx(styled.subNav,'brBot', 'brTopLeft',styled.subNavRight)}>
                                            <li className={styled.subNavItem}>
                                                <Link to='/'>Blog</Link>
                                            </li>
                                            <li className={styled.subNavItem}>
                                                <Link to='/'>Blog details</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/blogs'>Blog</Link>
                            </li>
                        </ul>
                        
                    </div>
                    <div className={styled.navRight}>
                        <ul className={styled.listNavRight}>
                            <li className={clsx(styled.navRightItem, styled.icon, styled.search)}>
                                <FaSearch/>
                            </li>
                                <div className={clsx(styled.input,'brBot',styled.icon)}>
                                    <FaSearch/>
                                    <input type='text' placeholder='seach something ...'/>
                                </div>
                            <li className={clsx(styled.navRightItem, styled.icon)}>
                                <FaRegBell/>
                            </li>
                            <li className={clsx(styled.navRightItem, styled.avatar)}>
                                <img src='./user.jpg'/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;