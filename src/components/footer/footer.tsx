import Image from 'next/image'
import React from 'react'
import logo from '@/../public/img/header/logo.png'
import Link from 'next/link'
import Playmarket from '@/../public/img/footer/playmarket.png'
import Appstore from '@/../public/img/footer/appstore.png'
export const Footer = () => {
  return (
    <div className='pt-[32px] pl-[85px] pb-[37px] flex shadow-footer bg-white'>
      <div >
        <Image
        src={logo}
        alt='logo'
        className='mb-[24px]'
        />
        <h2 className='font-medium text-[19px] leading-[150%] text-black'>
        Mobilux © 2022
        </h2>
        <h3 className='font-normal text-[15px] leading-[150%] text-black mb-[16px]'>
        Barcha huquqlar kafolatlangan
        </h3>
        <div className='flex gap-[12px] mr-[145px]'>
          <Link href={'/'}>
          <Image
          src={Playmarket}
          alt='playmarket'
          />
          </Link>
          <Link href={'/'}>
          <Image
          src={Appstore}
          alt='playmarket'
          />
          </Link>
        </div>
        </div>
        <div className='mr-[150px]'>
          <h3 className='mb-[16px] font-medium text-[19px] leading-[120%] text-[#0d1136] cursor-pointer'>Foydali havolalar</h3>
          <ul>
            <li className=' py-[3px] font-normal text-[13px] leading-[150%] text-[#0d1136]` cursor-pointer'><Link href={'/'}>Bosh sahifa</Link></li>
            <li className=' py-[3px] font-normal text-[13px] leading-[150%] text-[#0d1136]` cursor-pointer'><Link href={'/'}>Yordam kerakmi?</Link></li>
            <li className=' py-[3px] font-normal text-[13px] leading-[150%] text-[#0d1136]` cursor-pointer'><Link href={'/'}>Foydalanish shartlari</Link></li>
            <li className=' py-[3px] font-normal text-[13px] leading-[150%] text-[#0d1136]` cursor-pointer'><Link href={'/'}>Maxfiylik siyosati</Link></li>
          </ul>
        </div>
        <div>
          <h3 className='mb-[16px] font-medium text-[19px] leading-[120%] text-[#0d1136] cursor-pointer'>Biz haqimizda</h3>
          <ul>
            <li className=' py-[3px] font-normal text-[13px] leading-[150%] text-[#0d1136]` cursor-pointer'><Link href={'/'}>Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul, 03113, Crescent Trade ltd</Link></li>
            <li className=' py-[3px] font-normal text-[13px] leading-[150%] text-[#0d1136]` cursor-pointer'><Link href={'/'}>Korxona nomi: Mobilux trade</Link></li>
            <li className=' py-[3px] font-normal text-[13px] leading-[150%] text-[#0d1136]` cursor-pointer'><Link href={'/'}>Korxona rahbari: HASANBOY TURSUNOV</Link></li>
            <li className=' py-[3px] font-normal text-[13px] leading-[150%] text-[#0d1136]` cursor-pointer'><Link href={'/'}>Registratsiya raqami: 433-62-00377</Link></li>
            <li className=' py-[3px] font-normal text-[13px] leading-[150%] text-[#0d1136]` cursor-pointer'><Link href={'/'}>Telefon raqami: 93 000 66-44
            97 000 66-44</Link></li>
          </ul>
        </div>
      </div>
  )
}
