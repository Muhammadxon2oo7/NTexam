// // src/components/header/Header.tsx

// "use client";

// import React from "react";
// import Image from "next/image";
// import { Button } from "../ui/button";
// import { SearchIcon } from "@/../public/img/header/SearchIconn";
// import { FilterIcon } from "@/../public/img/header/FilterIcon";
// import { Modal } from "./components/modal";
// import { DropDown } from "./components/dropDown";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { UzIcon } from "@/../public/img/header/UzIcon";
// import { EnIcon } from "@/../public/img/header/EnIcon";
// import CartPopover from "./components/cartPopover";
// import Link from "next/link";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store";
// import Logo from '@/../public/img/header/logo.png'
// // Accept user and userName props
// export const Header = ({ user, userName }: { user: string | null; userName: string | null }) => {
//   const items = useSelector((state: RootState) => state.cart.items);
//   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <div className="max-w-[1440px] px-[50px] pt-[23px] pb-[20px] flex items-center shadow-bottom-only bg-white">
//       <div className="mr-[44px]">
//         <Link href={"/"}>
//           <Image width={116} height={28} src={Logo} alt="logo" priority={true} />
//         </Link>
//       </div>
//       <div className="border border-primary bg-[#f7f7f7] rounded-[6px] w-[910px] h-[49px] flex items-center pl-[9px] mr-[24px]">
//         <SearchIcon />
//         <input
//           type="text"
//           placeholder="Qidirish"
//           className="h-[90%] bg-transparent flex flex-grow outline-none pl-[16px] pr-[10px]"
//         />
//         <Button className="flex w-[118px] h-full rounded-none rounded-tr-[6px] rounded-br-[6px]">
//           <FilterIcon /> Filter
//         </Button>
//       </div>
//       <Select>
//         <SelectTrigger className="w-[78px] h-[38px] bg-[#f6f8fa] mr-[20px]">
//           <SelectValue placeholder={<UzIcon />} />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="uz">
//             <div className="flex items-center gap-[6px]">
//               <UzIcon />
//               uz
//             </div>
//           </SelectItem>
//           <SelectItem value="en">
//             <div className="flex items-center gap-[6px]">
//               <EnIcon />
//               en
//             </div>
//           </SelectItem>
//         </SelectContent>
//       </Select>

//       <CartPopover />

//       {/* Show DropDown if user exists, otherwise show Modal */}
//       {user ? (
//         <DropDown userName={userName} user={user} />
//       ) : (
//         <Modal user={user} />
//       )}
//     </div>
//   );
// };



// src/components/header/Header.tsx
"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { FilterIcon } from "@/../public/img/header/FilterIcon";
import { Modal } from "./components/modal";
import { DropDown } from "./components/dropDown";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UzIcon } from "@/../public/img/header/UzIcon";
import { EnIcon } from "@/../public/img/header/EnIcon";
import CartPopover from "./components/cartPopover";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Logo from '@/../public/img/header/logo.png';
import Search from "@/components/search/Search"; // Import Search component

export const Header = ({ user, userName }: { user: string | null; userName: string | null }) => {
  const [searchResults, setSearchResults] = useState<any[]>([]); // Search natijalarini saqlash

  const items = useSelector((state: RootState) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="max-w-[1440px] px-[50px] pt-[23px] pb-[20px] flex items-center shadow-bottom-only bg-white relative">
      <div className="mr-[44px]">
        <Link href={"/"}>
          <Image width={116} height={28} src={Logo} alt="logo" priority={true} />
        </Link>
      </div>

      {/* Search component */}
      <Search onSearchResults={setSearchResults} /> 

     
      <Select>
        <SelectTrigger className="w-[78px] h-[38px] bg-[#f6f8fa] mr-[20px]">
          <SelectValue placeholder={<UzIcon />} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="uz">
            <div className="flex items-center gap-[6px]">
              <UzIcon />
              uz
            </div>
          </SelectItem>
          <SelectItem value="en">
            <div className="flex items-center gap-[6px]">
              <EnIcon />
              en
            </div>
          </SelectItem>
        </SelectContent>
      </Select>

      <CartPopover />

      {/* Agar foydalanuvchi mavjud bo'lsa, DropDown ko'rsatiladi, aks holda Modal */}
      {user ? (
        <DropDown userName={userName|| undefined} />
      ) : (
        <Modal user={user|| undefined} />
      )}
    </div>
  );
};
