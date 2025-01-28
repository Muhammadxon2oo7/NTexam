import { Button } from "@/components/ui/button";
import Image from "next/image";

import fetchWrapper from "@/service/fetchwrapper";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { Header } from "@/components/header/Header";
import Link from 'next/link';
import {MainLayout} from '@/components/mainLayout/mainLayout'
import { Categories } from "@/components/categroies/Categories";
import { Footer } from "@/components/footer/footer";
import { GetServerSideProps } from "next";
import { cookies } from "next/headers";

interface BannerT {
  img: string;
  id: number;
}


export default async function Home() {
 
  let banner = await fetchWrapper<BannerT[]>("/banners");

  return (
    <>
      <div className="w-full flex gap-[24px]">
        <MainLayout/>
        <div className="pt-[30px] overflow-hidden h-[90vh] overflow-y-auto">
          <Carousel opts={{ loop: true }}  className="w-[1086px] rounded-[6px] outline-none mb-[30px]">
            <CarouselContent className="w-[1086px]">
              {banner?.map((item) =>
                <CarouselItem className="w-[1086px]" key={item.id}>
                  <Image
                    width={1090}
                    height={226}
                    src={item.img}
                    alt="Banner img"
                    className="w-[1086px] h-[226px] rounded-[6px]"
                  />
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <Categories/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
