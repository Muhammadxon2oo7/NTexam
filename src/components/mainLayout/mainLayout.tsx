import fetchWrapper from "@/service/fetchwrapper";
import React from "react";
import { Button } from "../ui/button";
import { CartIcon } from "@/../public/img/home/CartIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

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

export const MainLayout = async () => {
  let data = await fetchWrapper<DataT[]>("/categories");
  return (
    <div className="w-[280px] max-h-full bg-white py-[30px] pl-[29px] pr-[20px]">
      <Button className="mb-[25px]">
        <CartIcon /> Maxsus buyurtma
      </Button>
      <Accordion type="single" collapsible>
        {data.map((Category) => (
          <AccordionItem key={Category.id} value={Category?.title}>
            <AccordionTrigger>{Category.title}</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4 marker:text-primary">
                {Category?.children?.map((product) => (
                  <li
                    key={product.id}
                    className=" my-[5px] cursor-pointer transition-all duration-300 hover:pl-6 hover:text-primary hover:font-medium hover:marker:content-['➔'] hover:marker:text-primary"
                  >
                    <Link
                      href={`pages/product/${product.id}`}
                      className="block truncate w-full"
                      title={product.title} 
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
