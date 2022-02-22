import clsx from 'clsx';
import { FaPlay } from 'react-icons/fa';
import ButtonNoneBack from '../Button/ButtonNoneBack';
import ButtonPlay from '../Button/ButtonPlay';
import ButtonSvg from '../Button/ButtonSvg';


import Age from '../manner/Age';
import PrimaryText from '../manner/PrimaryText';
import Rating from '../manner/Rating';
import styled from './Slide.module.css';

const data = {
    img:'https://templates.iqonic.design/streamit/frontend/html/images/trending/01.jpg',
    title:'Pes 2020',
    rate:4.6,
    details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    actors:'Karen Gilchrist, James Earl Jones',
    genres:'Action',
    tags:'Action, Adventure, Horror',
    age:18,
    duration:'2h 30m'
}
function Slide() {
    return (
        <div 
        className={styled.wrap} 
        style={{background:`url(${data.img})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            }}
        >
            <div className={styled.background}>
                <div 
                    className={clsx(styled.body,'grid', 'wide')}
                >
                    <div className='row alignCenter'>
                        <div className={'col l-6 m-12 c-12'}>
                            <h1 
                                className={styled.bigTitle} 
                                style={{
                                    backgroundImage:`url(./texure.jpg)`,
                            }}
                            >
                                {data.title}
                            </h1>
                            <div className={styled.wrapDetails}>
                                <div className={styled.rating}>
                                    <Rating rate={data.rate}/>
                                    <span>
                                        {`${data.rate} (IMDb)`}
                                    </span>
                                </div>
                                <div className={styled.ageTime}>
                                    <Age age={data.age}/>
                                    <span>{data.duration}</span>
                                </div>
                                <p>{data.details}</p>
                            </div>
                            <PrimaryText primary={'Starring : '}>{data.actors}</PrimaryText>
                            <PrimaryText primary={'Genres : '}>{data.genres}</PrimaryText>
                            <PrimaryText primary={'Tag : '}>{data.tags}</PrimaryText>
                            <div className={styled.button}>
                                <ButtonPlay href={'/blogs'}>
                                    <FaPlay/>
                                    Play now
                                </ButtonPlay>
                                <ButtonNoneBack href={'/'}>More details</ButtonNoneBack>
                            </div>
                        </div>
                        <div className={'col l-6 m-12 c-12'}>
                            <div className={styled.playTrailer}>
                                <ButtonSvg width={80} height={80}>Watch trailer</ButtonSvg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide;
