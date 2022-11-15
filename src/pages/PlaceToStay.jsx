import React from 'react'
import place from '../data/place'
import { AiFillStar } from 'react-icons/ai'
import Location from '../assets/images/location-icon.png'

const PlaceToStay = () => {
  return (
    <>
    <section className="flex flex-wrap gap-5 justify-between items-center px-7 md:px-24 py-8">
      <p>Restaurant</p>
      <p>Cottage</p>
      <p>Castle</p>
      <p>Fantastic city</p>
      <p>Beach</p>
      <p>Carbins</p>
      <p>Off-grid</p>
        <p>Farm</p>
        <button className="border rounded-lg py-3 px-6 flex items-center gap-6">Location <img src={Location} alt="" /></button>
    </section>
      <section className="flex gap-4 justify-center items-center flex-wrap px-3 lg:px-20 lg:p-10 mb-16">
        {place.map((item) => (
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
    </>
  )
}

export default PlaceToStay