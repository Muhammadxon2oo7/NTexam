
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { CartIcon } from "@/../public/img/home/CartIcon";
import { useDispatch } from "react-redux";
import { addToCart, updateQuantity } from "@/store/cartSlice";

export const Card = ({
  img,
  id,
  title,
  price,
}: {
  img: string;
  id: number;
  title: string;
  price: string;
}) => {
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setIsInCart(true);
    dispatch(
      addToCart({
        image: img,
        id: id.toString(),
        name: title,
        price: parseFloat(price),
        quantity: 1,
      })
    );
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    dispatch(updateQuantity({ id: id.toString(), quantity: quantity + 1 }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      dispatch(updateQuantity({ id: id.toString(), quantity: quantity - 1 }));
    } else {
      setIsInCart(false);
      dispatch(updateQuantity({ id: id.toString(), quantity: 0 }));
    }
  };

  return (
    <div className="relative w-[264px] pb-[17px] rounded-[10px] bg-white px-[17px] pt-[30px] shadow-sm border hover:border-primary flex flex-wrap justify-center">
      <Link href={`/pages/product/${id}`} className="block relative z-10">
        <Image
          width={200}
          height={200}
          alt="img"
          src={img}
          className="mx-auto mb-[30px] hover:scale-105"
        />
      </Link>
      <h3 className="text-lg font-medium text-black hover:text-primary">
        <Link href={`/pages/product/${id}`}>{title}</Link>
      </h3>
      <p className="font-bold text-[18px] text-gray-700 hover:text-primary">
        {price} so'm
      </p>
      {isInCart ? (
        <div className="flex items-center space-x-4">
          <Button onClick={handleDecrement}>−</Button>
          <span>{quantity}</span>
          <Button onClick={handleIncrement}>+</Button>
        </div>
      ) : (
        <Button onClick={handleAddToCart}>
          <CartIcon /> Savatchaga
        </Button>
      )}
    </div>
  );
};
