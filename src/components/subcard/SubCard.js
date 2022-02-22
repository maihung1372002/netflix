import clsx from 'clsx';
import styled from './SubCard.module.css';

function SubCard({children,show}) {
    return (
        <div className={clsx(styled.card,show ? styled.cardActived : '')}>
            {children}
        </div>
    )
}

export default SubCard;