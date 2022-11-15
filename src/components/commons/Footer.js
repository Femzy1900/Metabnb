import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import Logo2 from '../../assets/images/logo2.png'

const Footer = () => {
    return (
        <>
            <section className="bg-[#1d1d1d] text-white">
                <div className="flex items-center gap-10 flex-col-reverse md:flex-row pt-24 pb-16 px-10 lg:px-28">
                    <div className="lg:w-2/5 mt-5 md:mt-0">
                        <img src={Logo2} alt='Metabnb logo' className="mb-10 md:mb-20" />
                        <div className="flex gap-7 mb-5 md:mb-12">
                            <FaFacebookF className="w-6 h-6" />
                            <FiInstagram className="w-6 h-6" />
                            <FaTwitter className="w-6 h-6" />
                        </div>
                        <p className="text-lg">&copy; 2022 Metabnb</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="space-y-2 md:space-y-5 mb-5 md:mb-0">
                        <h3 className="text-lg font-semibold">Community</h3>
                        <p className="text-sm font-light">NFT</p>
                        <p className="text-sm font-light">Tokens</p>
                        <p className="text-sm font-light">Landlords</p>
                        <p className="text-sm font-light">Discord</p>
                    </div>
                        <div className="space-y-2 md:space-y-5 mb-5 md:mb-0">
                        <h3 className="text-lg font-semibold">Places</h3>
                        <p className="text-sm font-light">Castle</p>
                        <p className="text-sm font-light">Farms</p>
                        <p className="text-sm font-light">Beach</p>
                        <p className="text-sm font-light">Learn more</p>
                    </div>
                        <div className="space-y-2 md:space-y-5 mb-5 md:mb-0">
                        <h3 className="text-lg font-semibold">About us</h3>
                        <p className="text-sm font-light">Road map</p>
                        <p className="text-sm font-light">Creators</p>
                        <p className="text-sm font-light">Career</p>
                        <p className="text-sm font-light">Contact us</p>
                    </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Footer