import fetchWrapper from '@/service/fetchwrapper';
import React from 'react'
import { ShoppingIcon } from '@/../public/img/home/ShoppingIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { CartIcon } from '@/../public/img/home/CartIcon';
import { Card } from '../card/card';

interface Product {
  img: string;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: string;
  id: number;
}

interface Category {
  id: number;
  title: string;
  children: Product[];
}

type DataT = Category[];

const Categories = async () => {
  const data = await fetchWrapper<DataT>("/categories");

  return (
    <div>
      {data.map((item) => (
        <div className="mb-[26px]" key={item.id}>
          <h2 className="text-[32px] font-[700] flex gap-[18px] items-center mb-[26px]">
            <ShoppingIcon /> {item.title}
          </h2>
          <div className="flex flex-wrap gap-[11px]">
            {item?.children?.map((card: Product) => (
              <Card {...card} key={card.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
