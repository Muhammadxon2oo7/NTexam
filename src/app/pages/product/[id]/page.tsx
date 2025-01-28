"use client"; 

import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "@/store/cartSlice";
import fetchWrapper from "@/service/fetchwrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider, Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { TooltipTrigger } from '@/components/ui/tooltip';

interface Product {
  img: string;
  gallery: string[];
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: string;
  oldPrice: string;
  discount: number;
  colors: string[];
  availability: string;
  deliveryTime: string;
  description: string;
  id: number;
  rating: number;
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const dispatch = useDispatch();
  const { id } = params;

  let product: Product | null = null;

  try {
    product = await fetchWrapper(`/all/${id}`);
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div className="text-center text-red-500">Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring!</div>;
  }

  if (!product) {
    return <div className="text-center text-gray-500">Mahsulot topilmadi.</div>;
  }

  const handleAddToCart = () => {
    const item = {
      image: product.img,
      id: product.id.toString(),
      name: product.title,
      price: parseFloat(product.price),
      quantity: 1,
    };

    dispatch(addToCart(item));
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <Breadcrumb className="flex items-center space-x-2 text-gray-600">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="flex items-center hover:text-primary transition-colors">
              <span className="material-icons text-base">Bosh sahifa</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <span className="text-gray-400">/</span>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/pages/product/${id}`} className="font-semibold text-gray-800">
              {product.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <TooltipProvider>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            <div>
              <div className="relative">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="rounded-lg border"
                />
              </div>
              <div className="flex gap-2 mt-4">
                {product?.gallery?.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    width={100}
                    height={100}
                    className="rounded-lg border cursor-pointer hover:opacity-75"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{product.title}</h1>

              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-400 text-black">
                  {product.discount}% chegirma
                </Badge>
                <p className="text-gray-500 line-through">{product.oldPrice} so'm</p>
                <p className="text-2xl font-semibold text-green-600">
                  {product.price} so'm
                </p>
              </div>

              <Separator />

              <div className="flex items-center gap-1">
  {Array.from({ length: 5 }, (_, i) => (
    <Tooltip key={i}>
      <TooltipTrigger>
        <span
          className={`h-6 w-6 ${
            i < product.rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      </TooltipTrigger>
      <TooltipContent>
        {`${product.rating} yulduz`}
      </TooltipContent>
    </Tooltip>
  ))}
</div>


              <p className="text-gray-600">RAM: {product.rame}</p>
              <p className="text-gray-600">Brend: {product.brand}</p>
              <p className="text-gray-600">Holat: {product.availability}</p>

              <div>
                <p className="font-medium">Ranglar:</p>
                <div className="flex gap-2 mt-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                        color === product.color ? "border-2 border-black" : ""
                      }`}
                      style={{
                        backgroundColor:
                          color === "Black"
                            ? "#000"
                            : color === "Silver"
                            ? "#C0C0C0"
                            : color === "Blue"
                            ? "#0000FF"
                            : "#E0E0E0", 
                      }}
                    >
                      {color === product.color && <span className="text-xs text-white">✔</span>}
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <p className="text-gray-600">
                O‘zbekistonga yetkazib berish: {product.deliveryTime}
              </p>

              <Button className="w-full mt-4" onClick={handleAddToCart}>
                Savatchaga qo‘shish
              </Button>
            </div>
          </div>
        </TooltipProvider>
      </div>
    </>
  );
}
