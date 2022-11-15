import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RiArrowRightSLine } from 'react-icons/ri'
import PropTypes from 'prop-types';

import Logo from '../../assets/images/logo.png';
import Wallet1 from '../../assets/images/wallet1.png'
import Wallet2 from '../../assets/images/wallet2.png'
import { toggleScroll } from '../../utilities/general';
import Button from '../layout/Button';

function Header() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    const [scrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const func = () => setScrolled(window.pageYOffset > 30);

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', func);
        }
        func();

        return (() => {
            window.removeEventListener('scroll', func);
        });
    }, []);

    useEffect(() => {
        toggleScroll();

        return () => setTimeout(() => {
            toggleScroll();
        }, 0);
    }, [showMenu]);

    return (
        <>
            <header className={`w-full h-[106px]`}>
                <div className="w-full content">
                    <div className=" flex items-center justify-between py-8">
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} className="" alt="Metabnb Logo" />
                            </Link>
                        </div>
                        <div className="nav-links hidden lg:block">
                            <ul className="flex items-center space-x-8">
                                <Link to="/" className="font-semibold">Home</Link>
                                <Link to="/place-to-stay" className="font-semibold">Place to Stay</Link>
                                <Link className="font-semibold">NFTs</Link>
                                <Link className="font-semibold">Community</Link>
                            </ul>
                        </div>
                        <Button
                            className="hidden lg:block bg-pink-500"
                            bgColor="bg-primary"
                            textColor="text-white"
                            onClick={() => setShowModal(true)}
                        >
                            Connect wallet
                        </Button>

                        <div className="lg:hidden">
                            <HiOutlineMenuAlt1 className="w-8 h-auto cursor-pointer" onClick={() => setShowMenu(true)} />
                        </div>
                    </div>
                </div>
            </header>

            <div
                role="presentation"
                onClick={(e) => (e?.target?.classList?.contains('side-menu') && setShowMenu(false))}
                className={`header-side-menu ${showMenu ? 'show overlay' : ''} fixed z-40 top-0 left-0 w-full h-screen bg-black bg-opacity-40`}
            >
                <div className="bg-white w-full absolute right-0 top-0 h-full overflow-y-auto">
                    <div className="w-full relative">
                        <div className="flex justify-between px-5 py-8">
                            <div className="logo">
                                <Link to="/">
                                    <img src={Logo} className="" alt="Alat Logo" />
                                </Link>
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowMenu(false)}
                                className="font-bold flex items-center hover:bg-opacity-20 hover:bg-primary"
                            >
                                <MdClose className="w-10 h-auto" />
                            </button>
                        </div>
                        <div className="w-full px-5 py-6">
                            <ul className="w-full text-lg">
                                <Link to="/" onClick={() => setShowMenu(false)}>
                                    <li className={`${location.pathname === '/' ? 'bg-primary bg-opacity-20' : ''} header-side-link`}>
                                        Home
                                    </li>
                                </Link>
                                <Link to="/place-to-stay" onClick={() => setShowMenu(false)}>
                                    <li className={`${location.pathname === '/place-to-stay' ? 'bg-primary bg-opacity-20' : ''} header-side-link`}>
                                        Place to stay
                                    </li>
                                </Link>
                                <Link onClick={() => setShowMenu(false)}>
                                    <li className={`${location.pathname === '/nfts' ? 'bg-primary bg-opacity-20' : ''} header-side-link`}>
                                        NFTs
                                    </li>
                                </Link>
                                <Link onClick={() => setShowMenu(false)}>
                                    <li className={`${location.pathname === '/community' ? 'bg-primary bg-opacity-20' : ''} header-side-link`}>
                                        Community
                                    </li>
                                </Link>
                            </ul>
                            <Button
                                className="mt-10"
                                bgColor="bg-primary"
                                textColor="text-white"
                                onClick={() => (setShowModal(true))}
                            >
                                Connect wallet
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center flex overflow-hidden fixed inset-0 z-50 "
                    >
                        <div className="relative lg:w-1/3 w-full p-5 px-5 lg:px-0 mt-auto mb-auto overflow-hidden">
                            <div className="shadow-lg relative flex flex-col w-full bg-white rounded-xl outline-none focus:outline-none">
                                <div className="flex items-center justify-between p-6 border-b-2">
                                    <h3 className="text-black font-semibold">Connect Wallet</h3>
                                    <AiOutlineClose
                                        className="cursor-pointer"
                                        onClick={() => setShowModal(false)}
                                    />
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <h1 className="">Choose your preferred wallet:</h1>
                                    <div className="flex justify-between items-center border border-[#cfd8dc] rounded-lg px-3 py-1 bg-[#f8f9fa] mt-3">
                                        <span className="flex items-center font-semibold gap-4">
                                            <img src={Wallet1} alt="" /> Metamask
                                        </span>
                                        <RiArrowRightSLine />
                                    </div>
                                    <div className="flex justify-between items-center border border-[#cfd8dc] rounded-lg px-3 py-1 bg-[#f8f9fa] mt-3">
                                        <span className="flex items-center font-semibold gap-4">
                                            <img src={Wallet2} alt="" /> Metamask
                                        </span>
                                        <RiArrowRightSLine />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-30 bg-black overflow-hidden" />
                </>
            ) : null}


        </>
    );
}

Header.propTypes = {
    solidBg: PropTypes.bool
};

Header.defaultProps = {
    solidBg: false
};

export default Header;
