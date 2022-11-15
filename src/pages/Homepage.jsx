import React from 'react';
import home from '../data/home';
import Button from '../components/layout/Button'
import Hero1 from '../assets/images/hero1.png'
import Hero2 from '../assets/images/hero2.png'
import Hero3 from '../assets/images/hero3.png'
import Hero4 from '../assets/images/hero4.png'
import Sponsor1 from '../assets/images/sponsor1.png'
import Sponsor2 from '../assets/images/sponsor2.png'
import Sponsor3 from '../assets/images/sponsor3.png'
import GroupImage from '../assets/images/group-image.png'
import { AiFillStar } from 'react-icons/ai'

const Homepage = () => {

  return (
    <>
      <section className="bg-white flex flex-col md:flex-row justify-between px-5 lg:px-20 mt-14 md:pt-10">
        <div className="w-full md:w-2/3 md:px-5 mb-">
          <h1 className="text-4xl lg:text-6xl leading-snug">
            Rent a <span className="text-primary text-pink-500">Place</span> away from <span className="text-primary text-pink-500">Home</span> in the <span className="text-primary  text-pink-500">Metaverse</span>
          </h1>
          <p className="py-10 text-xl max-w-xl">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          <div className="flex relative overflow-hidden">
            <input type="search" className="outline-none border border-[#a3a3a3] px-1 lg:px-7 w-4/5 md:w-3/4 py-3 rounded-l-lg" id="" placeholder="Search for location" />
            <button className="bg-primary absolute md:relative right-0 text-white py-3.5 px-3 md:px-8 rounded-r-lg bg-pink-700">Search</button>
          </div>
        </div>
        <div className="flex flex-row w-full lg:w-1/2 gap-2 mt-13 md:mt-0 ">
          <div className="mt-16">
            <img src={Hero1} alt="A Metabnb" className="w-full" />
            <img src={Hero2} alt="A Metabnb" className="mt-2 w-full" />
          </div>
          <div>
            <img src={Hero3} alt="A Metabnb" className="w-full" />
            <img src={Hero4} alt="A Metabnb" className="mt-2 w-full" />
          </div>
        </div>
      </section>
      <section className="mb-10 mt-16 bg-primary py-3 bg-pink-700">
        <section className="bg-primary">
          <div className="flex justify-between items-center max-w-7xl m-auto px-5 lg:px-10 py-2">
            <img src={Sponsor1} alt="MBToken" className="object-contain w-24 md:w-auto h-auto" />
            <img src={Sponsor2} alt="Metamask" className="object-contain w-24 md:w-auto h-auto" />
            <img src={Sponsor3} alt="Opensea" className="object-contain w-24 md:w-auto h-auto" />
          </div>
        </section>
      </section>
      <h2 className="font-bold text-3xl px-3 md:text-5xl text-center text-black py-10">Inspiration for your next adventure</h2>
      <section className="flex gap-4 justify-center items-center flex-wrap px-3 lg:px-20 lg:p-10 mb-16">
        {home.map((item) => (
          <div key={item?.sn} className="border border-[#d7d7d7] rounded-lg p-3 text-xs">
            <img src={item?.img} alt="" className="object-contain w-[300px] h-auto" />
            <div className="flex justify-between mt-3">
              <p>Desert King</p>
              <p className="font-semibold">1MBT per night</p>
            </div>
            <div className="flex justify-between mt-3 ">
              <p>2345Km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className="flex mt-2 gap-1.5">
              {Array.from({ length: 5 }, (_, index) => <AiFillStar className="text-primary" key={index} />)}
            </div>
          </div>
        ))}
      </section>
      <section className="bg-primary p-5 lg:p-16 bg-pink-600">
        <div className="flex justify-between px-5 md:pt-16">
          <div className="text-white md:max-w-md mt-16 md:p-4">
            <h2 className="font-bold text-5xl">Metabnb NFTs</h2>
            <p className="py-8 leading-relaxed text-lg">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs.
              These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <Button
              className="text-pink-600"
              border
              bgColor="bg-white"
              textColor="text-primary"
            >
              Learn more
            </Button>
          </div>
          <img src={GroupImage} alt="Group of Metabnb" className="hidden md:block w-1/2" />
        </div>
      </section>
    </>
  )
}

export default Homepage