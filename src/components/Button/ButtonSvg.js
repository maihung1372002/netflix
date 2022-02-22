import styled from './Button.module.css';


function ButtonSvg({width,height,children}) {
    const tri = `${width*0.35},${height*0.3} ${width*0.75},${height*0.5} ${width*0.35},${height*0.7}`;
    
    return (
        <div className={styled.svgItem}>
            <svg width={width} height={height} className={styled.svg}>
                <polygon points={tri} className={`${styled.triangle}`} />
                <circle cx={width*0.5} cy={height*0.5} r={width*0.5 - 2}  className={`${styled.circle}`}/>
            </svg>
            <span>{children}</span>
        </div>
    )
}

export default ButtonSvg;
