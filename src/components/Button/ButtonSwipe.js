
import { RIGHT } from '../../globalConfig/CONSTANTS';

import styled from './Button.module.css';

function ButtonSwipe({onClick,width,height,side}) {
    const points = side === RIGHT ?
    `${width*0.4},${height*0.3} ${width*0.65},${height*0.5} ${width*0.4},${height*0.7}`:
    `${width*0.6},${height*0.3} ${width*0.35},${height*0.5} ${width*0.6},${height*0.7}`;
    
    return (
            <svg width={width} height={height}>
                <circle cx={width*0.5} cy={height*0.5} r={width*0.5 - 2} fill='none' stroke='white' strokeWidth={2} strokeLinecap='round'/>
                <polyline points={points} fill='none' stroke='white' strokeWidth={2} strokeLinecap='round'/>
            </svg>
    )
}

export default ButtonSwipe;