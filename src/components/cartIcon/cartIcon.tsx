"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import Image from "next/image";
import {Notification} from '../../../public/img/header/Notification'
export const CartIcon = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative">
     <Notification/>
      {totalItems > 0 && (
        <span className="absolute -top-4 -right-4 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          {totalItems}
        </span>
      )}
    </div>
  );
};
