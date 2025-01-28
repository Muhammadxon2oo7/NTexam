import React, { ReactNode } from "react";
import Link from "next/link";
import { Aside } from "./components/Aside";

interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {

  return (
    <div >
      <div className="flex pt-[50px] gap-[24px] ">
      <Aside/>
      <main className="flex flex-grow pt-[32px] rounded-[12px] pl-[24px] bg-white border border-gray-200" style={{ flex: 1 }}>
        {children}
      </main>
      </div>
    </div>
  );
};

export default ProfileLayout;
