import Image from 'next/image'

import '@Styles/components/home.css'

import HouseImgSrc from '@Assets/imgs/house.png';


export default function Index() {
    return (
        <div className='homeWrapper'>
            <HouseImg />
            <Pillars />
        </div>
    );
}



function HouseImg() {
    return (
        <div className='imgContainer'>
            <Image className='img' src={HouseImgSrc} alt='PKT Logo' />
            <div className='darkenOverlay'></div>
            <Quote />
        </div>
    );
}



function Pillars() {
    return (
        <div className='pillarContainer'>
            <h1 className='pillarText'>
                In Phi Kappa Theta, members develop in areas of:
            </h1>
            <div className='pillars'>
                <div className='pillar'>Brotherhood</div>
                <div className='pillar'>Societal</div>
                <div className='pillar'>Intellectual</div>
            </div>
            <h1 className='pillarText'>
                These areas define the three pillars of our fraternity, and are present in all of our work.
            </h1>
        </div>
    );
}



function Quote() {
    return (
        <div className='quoteContainer'>
            <div className='quoteFlex'>
                <h2 className='quoteText'>"Give, expecting nothing thereof"</h2>
                <h3 className='quoteAttribution'>- St. Thomas Aquinas</h3>
            </div>
        </div>
    );
}