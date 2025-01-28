"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import * as Accordion from "@radix-ui/react-accordion"; // ShadCN Accordion importi
import { ChevronDownIcon } from "@heroicons/react/20/solid"; // O'zingizning ikonkaning yo'li

const Orders = () => {
  const [orders, setOrders] = useState<any[]>([]);

  // localStorage'dan buyurtmalarni olish
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  const handleAddNewOrder = () => {

    window.location.href = "/"; 
    localStorage.removeItem("cartItems"); 
  };

  return (
    <div className="p-6 ">
      <div className="w-full flex flex-wrap gap-[5px]">
    
        {orders.length > 0 ? (
          orders.map((order: any) => (
            <Card key={order.orderId} className="bg-white shadow-lg rounded-xl mb-4  w-[300px]">
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-800">Buyurtma: <mark>{order.orderId}</mark> </h2>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Manzil:</h3>
                <p>{order.address}</p>

                <Accordion.Root type="single" collapsible>
                  <Accordion.Item value={order.orderId} className="mt-4">
                    <Accordion.Header>
                      <Accordion.Trigger className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      
                        Mahsulotlar
                        <ChevronDownIcon className="h-5 w-5 text-gray-600 ml-auto" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                      <div className="space-y-4">
                        {order.items.map((item: any) => (
                          <div key={item.id} className="flex justify-between items-center mb-4">
                            <p>{item.name}</p>
                            <p>{item.quantity} x {item.price} $</p>
                          </div>
                        ))}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>

                <div className="mt-4 flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-800">Jami:</p>
                  <p className="text-xl font-bold text-green-500">
                    {order.items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)} $
                  </p>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div>Buyurtmalar mavjud emas.</div>
        )}
      </div>
      <div className="flex  mt-4">
        <Button onClick={handleAddNewOrder} className="bg-primary text-white">
          Buyurtma qo'shish
        </Button>
      </div>
    </div>
  );
};

export default Orders;
