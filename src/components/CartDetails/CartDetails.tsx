"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/index";
import { updateQuantity } from "@/store/cartSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const CartDetails = ({ user }: { user: string | null }) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleOrderRedirect = () => {
    if (user) {
      setIsModalOpen(true);
    } else {
      alert("Iltimos, ro'yxatdan o'ting yoki tizimga kiring!");
    }
  };

  const handleAddressSubmit = () => {
    if (address) {
  
      const orderId = `order_${Math.random().toString(36).substring(2, 9)}`;

      const order = {
        orderId,
        address,
        items,
      };

      let previousOrders = JSON.parse(localStorage.getItem("orders") || "[]");

      previousOrders.push(order);

      localStorage.setItem("orders", JSON.stringify(previousOrders));

      localStorage.removeItem("cartItems");

      setIsModalOpen(false); 

      window.location.href = "/profile/orders";
    } else {
      alert("Manzilni kiriting!");
    }
  };

  return (
    <div className="p-6 space-y-4">
      <Card className="bg-white shadow-lg rounded-xl">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-gray-800">Savatcha</h2>
        </CardHeader>
        <CardContent>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 mb-4 border-b border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <Image
                height={100}
                width={100}
                src={item.image}
                alt="Product Image"
                className="rounded-md"
              />
              <div className="flex flex-col justify-between flex-grow ml-4">
                <p className="text-lg font-medium text-gray-700">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="bg-gray-200 hover:bg-gray-300"
                >
                  -
                </Button>
                <span className="text-xl font-semibold">{item.quantity}</span>
                <Button
                  variant="outline"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="bg-gray-200 hover:bg-gray-300"
                >
                  +
                </Button>
              </div>
            </div>
          ))}
          <div className="mt-4 flex justify-between items-center">
            <p className="text-lg font-semibold text-gray-800">Jami:</p>
            <p className="text-xl font-bold text-green-500">
              {items.reduce((sum, item) => sum + item.price * item.quantity, 0)} $
            </p>
          </div>
        </CardContent>
      </Card>

    
      <div className="flex justify-end mt-4">
      <Button
  onClick={handleOrderRedirect}
  className="bg-primary text-white"
  disabled={!user}
>
  {!user ? "Iltimos, ro'yxatdan o'ting" : "Rasmiylashtirish"}
</Button>
      </div>

     
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Manzilni kiriting</h3>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Manzilni kiriting"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="flex justify-end mt-4">
              <Button onClick={handleAddressSubmit} className="bg-primary text-white">
                Tasdiqlash
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
