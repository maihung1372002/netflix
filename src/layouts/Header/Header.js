
import {Link} from 'react-router-dom';
import { FaBars, FaCog, FaEllipsisH, FaIdBadge, FaRegBell, FaRegTimesCircle, FaSearch, FaSignOutAlt, FaTimesCircle} from 'react-icons/fa';
import { useState } from 'react';
import clsx from 'clsx';

import styled from './Header.module.css';
import SubCard from '../../components/subcard/SubCard';
import { toggleState } from '../../utils';

import{AVATAR,NOTIFY,SEARCH,MENU,RIGHT_MENU} from '../../globalConfig/CONSTANTS';
function Header() {
    const [showSubCard, setShowSubCard] = useState(false);

    const [showNav, setShowNav] = useState(false);
    const [showMenuRight, setShowMenuRight] = useState(false);
    function handleClickNavRightItem(value) {
        setShowSubCard(pre => {
            if(value === pre) {
                return false;
            }
            return value;
        });
    }
    return (
        <div className={styled.wrap}>
            <div className={clsx('grid','wide')}>
                <div className={styled.header}>
                    <div 
                        className={styled.menuNav} 
                        onClick={() => {
                            toggleState(setShowNav);
                            handleClickNavRightItem(false);
                    }}>
                        <FaBars/>
                    </div>
                    <div className={styled.logo}>
                        <img className={styled.logoW} src='./Netflix-manner.png'/>
                        <img className={styled.logoS} src='./Netflix.png'/>
                    </div>
                    <div className={styled.nav} style={showNav ? {transform: `translate(0)`} : {}}>
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
                                    <li className={clsx(styled.subNavItem,styled.wrapSubNav)}>
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
                    <div 
                        className={styled.menuNavRight} 
                        onClick={() => {
                            toggleState(setShowMenuRight);
                            handleClickNavRightItem(false);
                        }}
                    >
                        <FaEllipsisH />
                    </div>
                    <div className={styled.navRight} style={showMenuRight ? {transform: `translate(0)`} : {}}>
                        <ul className={styled.listNavRight}>
                            <li 
                                className={clsx(styled.navRightItem, styled.icon, styled.search)}
                                onClick={() => {
                                    handleClickNavRightItem(SEARCH)
                                }}
                            >
                                <FaSearch/>
                            </li>
                                <SubCard show={showSubCard === SEARCH}>
                                    <div className={clsx(styled.input,'brBot')}>
                                        <div 
                                            className={styled.icon}
                                            onClick={() => handleClickNavRightItem(false)}
                                            ><FaSearch/></div>
                                        <input 
                                            type='text' 
                                            placeholder='seach something ...'
                                        />
                                    </div>
                                </SubCard>
                            <li className={clsx(styled.navRightItem, styled.icon, styled.bell)}
                                onClick={() => {handleClickNavRightItem(NOTIFY)}}
                            >
                                <FaRegBell/>
                            </li>
                                <SubCard show={showSubCard === NOTIFY}>
                                    <div className={styled.notify}>
                                        <div className={clsx(styled.notifyItem,'brTop')}>
                                            <img src='https://templates.iqonic.design/streamit/frontend/html/images/notify/thumb-1.jpg'/>
                                            <div className={styled.notifyBody}>
                                                <h2 className={styled.notifyTitle}>Boot Bitty</h2>
                                                <p className={styled.notifyTime}>13 minutes ago</p>
                                            </div>
                                        </div>
                                        <div className={clsx(styled.notifyItem, 'brBot')}>
                                            <img src='https://templates.iqonic.design/streamit/frontend/html/images/notify/thumb-1.jpg'/>
                                            <div className={styled.notifyBody}>
                                                <h2 className={styled.notifyTitle}>Boot Bitty</h2>
                                                <p className={styled.notifyTime}>13 minutes ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </SubCard>
                            <li 
                                className={clsx(styled.navRightItem, styled.avatar)}
                                onClick={() => {handleClickNavRightItem(AVATAR)}}
                            >
                                <img src='./user.jpg'/>
                            </li>
                                <SubCard show={showSubCard === AVATAR}>
                                    <div className={clsx(styled.wrapSubcard,'brTop','brBot')}>
                                        <div className={clsx(styled.userItem,'brTop')}>
                                            <FaIdBadge/>
                                            <h3 className={styled.userContent}>Manage profile</h3>
                                        </div>
                                        <div className={clsx(styled.userItem)}>
                                            <FaCog/>
                                            <h3 className={styled.userContent}>Settings</h3>
                                        </div>
                                        <div className={clsx(styled.userItem)}>
                                            <FaCog/>
                                            <h3 className={styled.userContent}>Pricing Plan</h3>
                                        </div>
                                        <div className={clsx(styled.userItem,'brBot','bornone')}>
                                            <FaSignOutAlt/>
                                            <h3 className={styled.userContent}>Logout</h3>
                                        </div>
                                    </div>
                                </SubCard>
                        </ul>
                    </div>
                </div>
                <div className={clsx(styled.modal,showSubCard ? '' : 'dpnone')}
                    onClick={() => handleClickNavRightItem(false)}
                >
                </div>
            </div>
        </div>
    )
}
export default Header;