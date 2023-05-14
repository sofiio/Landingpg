import React from 'react'
import { useTranslation, initReactI18next } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
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
    <div className='w-[234px] h-[183px] text-[#5A5A5A]'><strong>{t('About us')}</strong>
    <div className='mt-4'>
      <h2>{t('What is our platform about')}</h2>
      <h2>{t('Tel: +995 598 472 572')}</h2>
      <h2>{t('Geotrevelfree@gmail.com2')}</h2>
      <h2>{t('Advertising')}</h2>
      <h2>{t('Support service')}</h2>
    </div>
    </div>
    <div className='w-[147px] h-[183px] text-[#5A5A5A]'><strong>{t('The main thing')}</strong>
    <div className='mt-4'>
      <h2>{t('All regions')}</h2>
      <h2>{t('Tours')}</h2>
      <h2>{t('Hostels')}</h2>
      <h2>{t('Explore')}</h2>
      <h2>{t('Recreation')}</h2>
      <h2>{t('Entertainment')}</h2>
    </div>
    </div>
    <div className='w-[237px] h-[183px] text-[#5A5A5A]'><strong>{t('Popular destinations')}</strong>
    <div className='mt-4'>
      <h2>{t('The road on top of Khvamli')}</h2>
      <h2>{t('Mountainous Adjara')}</h2>
      <h2>{t('Kazbegi with your eyes')}</h2>
      <h2>{t('Tskaltubo - infinite beauty')}</h2>
      <h2>{t('Walk in Mestia')}</h2>
      <h2>{t('Pshav-Khevsuretit')}</h2>
    </div>
    </div>
    <div className='w-[152px] h-[183px] mt-12 lg:mt-0 text-[#5A5A5A]'><strong>{t('About Georgia')}</strong>
    <div className='mt-4'>
      <h2>{t('Historical articles')}</h2>
      <h2>{t('Culture')}</h2>
      <h2>{t('Cooking')}</h2>
      <h2>{t('Winemaking')}</h2>
      <h2>{t('Holidays')}</h2>
      <h2>{t('Museums')}</h2>
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