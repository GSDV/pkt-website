import Image from 'next/image';
import Link from 'next/link';

import InstaLogoSrc from '@Assets/imgs/instagram-logo.png';



export default function Index() {
    return (
        <div className='fullWrapper'>
            <div className='pWrapper'>
                <div className='pTitle'>Rush</div>
                <div className='pText'>
                    We hold rush events at the start of each semester (Fall and Spring). These events are open to all. Come meet the brothers!
                </div>

                <div className='pSpacer'></div>

                <div className='pText'>
                    Follow our <a target='_blank' href='https://www.instagram.com/uiucphikaps/'>Instagram</a> to get rush updates and the event list.
                </div>

                <div className='pSpacer'></div>

                <div style={{display:'flex', justifyContent: 'center' }}>
                    <Link href='https://www.instagram.com/uiucphikaps/' target='_blank'>
                        <Image className='instalogo' src={InstaLogoSrc} alt='Instagram Logo'/>
                    </Link>
                </div>
            </div>
        </div>
    );
}