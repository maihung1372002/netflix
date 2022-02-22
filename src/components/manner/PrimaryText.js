import styled from './Manner.module.css';

function PrimaryText({primary,children}) {
    return (
        <div className={styled.primary}>
            {primary}
            <span className={styled.content}>{children}</span>
        </div>
    )
}

export default PrimaryText;
