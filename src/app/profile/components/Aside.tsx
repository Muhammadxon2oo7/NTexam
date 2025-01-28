"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export const Aside = () => {

  const [activeLink, setActiveLink] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveLink(index);
  };

  return (
    <div className='rounded-[12px] w-[300px] bg-white border border-gray-200 h-[316px] pt-[17px]'>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li 
            className={`h-[50px] pl-[16px] flex items-center text-[14px] ${activeLink === 0 ? 'border-l-4 border-primary font-extrabold text-[14px]' : ''}`}
          >
            <Link href="/profile">
            <button 
              className="w-full h-full text-left"
              onClick={() => handleClick(0)}
            >
              Overview
            </button>
            </Link>
          </li>
          <li 
            className={`h-[50px] pl-[16px] flex items-center text-[14px] ${activeLink === 1 ? 'border-l-4 border-primary font-extrabold text-[14px]' : ''}`}
          >
            <button 
              className="w-full h-full text-left"
              onClick={() => handleClick(1)}
            >
              <Link href="/profile/orders">Sizning buyurtmalaringiz</Link>
            </button>
          </li>
          <li 
            className={`h-[50px] pl-[16px] flex items-center text-[14px] ${activeLink === 2 ? 'border-l-4 border-primary font-extrabold text-[14px]' : ''}`}
          >
            <button 
              className="w-full h-full text-left"
              onClick={() => handleClick(2)}
            >
              <Link href="/profile/device">Sizning qurilmalaringiz</Link>
            </button>
          </li>
          <li 
            className={`h-[50px] pl-[16px] flex items-center text-[14px] ${activeLink === 3 ? 'border-l-4 border-primary font-extrabold text-[14px]' : ''}`}
          >
            <button 
              className="w-full h-full text-left"
              onClick={() => handleClick(3)}
            >
              <Link href="/profile/help">Yordam kerakmi ?</Link>
            </button>
          </li>
        </ul>
    </div>
  )
}
