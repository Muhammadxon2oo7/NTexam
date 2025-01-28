"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";

const AddressForm = () => {
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!address) {
      alert("Iltimos, manzilni kiriting!");
      return;
    }

    document.cookie = `address=${address}; path=/`;

    router.push("/profile/orders");
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Manzilni kiriting</h2>
      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Manzilni kiriting"
        className="mt-4"
      />
      <div className="flex justify-end mt-4">
        <Button onClick={handleSubmit} className="bg-primary text-white">
          Tasdiqlash
        </Button>
      </div>
    </div>
  );
};

export default AddressForm;
