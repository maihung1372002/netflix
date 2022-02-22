import styled from './Manner.module.css';

function Age({age}){
    return (
        <span className={styled.mannerAge}>{age}+</span>
    )
}
export default Age;