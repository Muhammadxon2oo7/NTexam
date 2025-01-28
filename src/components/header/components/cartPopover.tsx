import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { addToCart, updateQuantity, removeFromCart } from "@/store/cartSlice";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";

const CartPopover = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const handleDecrement = (item: { id: string; quantity: number }) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const handleIncrement = (item: { id: string; quantity: number }) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" className="relative mr-[10px]" size="icon">
          <span>🛒</span>
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {items.length}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] bg-white shadow-lg p-4 rounded-lg mt-[5px]">
        {items.length > 0 ? (
          <div>
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div className="flex-grow">
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-gray-500 text-xs">${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDecrement(item)}
                  >
                    −
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}
            <Button asChild className="w-full mt-4">
              <Link href="/pages/carddetails">Savatchaga o'tish</Link>
            </Button>
          </div>
        ) : (
          <p className="text-center text-gray-500">Savatcha bo'sh</p>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default CartPopover;
