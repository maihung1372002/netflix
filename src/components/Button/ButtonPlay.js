import {Link} from 'react-router-dom';


import styled from './Button.module.css';

function ButtonPlay({href,children}) {
    return (
        <div className={styled.play}>
            <Link to={href}>{children}</Link>
        </div>
    )
}
export default ButtonPlay;