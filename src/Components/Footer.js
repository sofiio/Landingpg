import React from 'react'

function Footer() {
  return (
    <div className="w-full bg-white  ">
    <nav className="container font-Poppins flex flex-col items-center  py-4 gap-12 mt-24">

    <div className='flex gap-4'>
    <img src="/youtube.svg" alt="" className="w-[59px] h-[42px]" />
    <img src="/facebook.svg" alt="" className="w-[42px] h-[42px]" />
    <img src="/instagram.svg" alt="" className="w-[42px] h-[42px]" />
    <img src="/tweeter.svg" alt="" className="w-[42px] h-[42px]" />
    </div>

    
    <div className='flex flex-col lg:flex-row xl:gap-28 gap-12 '>
    <div className='w-[234px] h-[183px] text-[#5A5A5A]'><strong>About us</strong>
    <div className='mt-4'>
      <h2>What is our platform about</h2>
      <h2>Tel: +995 598 472 572</h2>
      <h2>Geotrevelfree@gmail.com</h2>
      <h2>Advertising</h2>
      <h2>Support service</h2>
    </div>
    </div>
    <div className='w-[147px] h-[183px] text-[#5A5A5A]'><strong>The main thing</strong>
    <div className='mt-4'>
      <h2>All regions</h2>
      <h2>Tours</h2>
      <h2>Hostels</h2>
      <h2>Explore</h2>
      <h2>Recreation</h2>
      <h2>Entertainment</h2>
    </div>
    </div>
    <div className='w-[237px] h-[183px] text-[#5A5A5A]'><strong>Popular destinations</strong>
    <div className='mt-4'>
      <h2>The road on top of Khvamli</h2>
      <h2>Mountainous Adjara</h2>
      <h2>Kazbegi with your eyes</h2>
      <h2>Tskaltubo - infinite beauty</h2>
      <h2>Walk in Mestia</h2>
      <h2>Pshav-Khevsureti</h2>
    </div>
    </div>
    <div className='w-[152px] h-[183px] text-[#5A5A5A]'><strong>About Georgia</strong>
    <div className='mt-4'>
      <h2>Historical articles</h2>
      <h2>Culture</h2>
      <h2>Cooking</h2>
      <h2>Winemaking</h2>
      <h2>Holidays</h2>
      <h2>Museums</h2>
    </div>
    </div>
    </div>


    <div className='flex gap-4 mt-4'>
    <img src="/googlepay.svg" alt="" className="w-[147px] h-[50px]" />
    <img src="/appgallery.svg" alt="" className="w-[147px] h-[50px]" />
    </div>


    </nav>
    </div>
  )
}

export default Footer