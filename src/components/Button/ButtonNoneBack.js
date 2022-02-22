import {Link} from 'react-router-dom';


import styled from './Button.module.css';

function ButtonNoneBack({href,children}) {
    return (
        <div className={styled.noneBackground}>
            <Link to={href}>{children}</Link>
        </div>
    )
}
export default ButtonNoneBack;