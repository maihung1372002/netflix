import { FaStar } from "react-icons/fa";
import styled from './Manner.module.css';

function Rating({rate}) {
    return (
        <div className={styled.starFront}>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <div className={styled.starBack} style={{width: `${rate/5 *100}%`}}>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
        </div>
    )
}
export default Rating;