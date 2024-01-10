"use client"
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import PKTLogoImg from '@Assets/logo.png';
import InstaLogoSrc from '@Assets/imgs/instagram-logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';



export function DesktopNavbar() {
    let leftItems = [
        {title: 'Home', link: './'},
        {title: 'About', link: './about'},
        {title: 'Scholarships', link: './scholarships'}
    ];

    let rightItems = [
        {title: 'Donations', link: './donations'},
        {title: 'Newsletter', link: './newsletter'}
    ];


    return (
        <div id='desktopNav' className='navbar'>
            <div className='leftAlign'>
                {leftItems.map( (item, idx) => <DesktopNavItem key={idx} title={item.title} link={item.link} /> )}
            </div>

            <Image className='pktLogo' src={PKTLogoImg} alt='PKT Logo' />

            <div className='rightAlign'>
                <InstagramLogo />
                {rightItems.map( (item, idx) => <DesktopNavItem key={idx+leftItems.length} title={item.title} link={item.link} /> )}
            </div>
        </div>
    );
}



export function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div id='mobileNav' className='navbar'>
            <Image className='pktLogo' src={PKTLogoImg} alt='PKT Logo' />
            <div className='openMobileScreen' onClick={() => setIsOpen(true)}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
        { isOpen && <MobileFullScreen setIsOpen={setIsOpen}/> }
        </>
    );
}



interface SetIsOpenProp { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }

function MobileFullScreen({setIsOpen}: SetIsOpenProp) {
    let items = [
        {title: 'Home', link: './'},
        {title: 'About', link: './about'},
        {title: 'Scholarships', link: './scholarships'},
        {title: 'Donations', link: './donations'},
        {title: 'Newsletter', link: './newsletter'}
    ];
    return (
        <div className='navFullScreenWrapper'>
            <div className='closeMobileScreen' onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon icon={faX} />
            </div>
            {items.map( (item, idx) => <MobileNavItem key={idx} setIsOpen={setIsOpen} title={item.title} link={item.link} /> )}
            <InstagramLogo />
        </div>
    );
}





interface DesktopNavItemProp { title: string, link: string }
function DesktopNavItem({ title, link }: DesktopNavItemProp) {
    return (
        <Link href={link} className='navitem'>
            <p>{title}</p>
        </Link>
    );
}

interface MobileNavItemProp { title: string, link: string, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }
function MobileNavItem({ title, link, setIsOpen }: MobileNavItemProp) {
    return (
        <Link href={link} className='navitemMobile' onClick={() => setIsOpen(false)}>
            <p>{title}</p>
        </Link>
    );
}



function InstagramLogo() {
    return (
        <Link href='https://www.instagram.com/uiucphikaps/' target='_blank'>
            <Image className='instalogo' src={InstaLogoSrc} alt='Instagram Logo' />
        </Link>
    )
}