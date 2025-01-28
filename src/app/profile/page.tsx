'use client'; // Client Component

import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';  // Custom Toast Hook

const Profile = () => {
  const [cookies, setCookie] = useCookies(['userName']);
  const [inputValue, setInputValue] = useState(cookies.userName || '');
  const { toast } = useToast();  // Get the toast function

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    setCookie('userName', inputValue, { path: '/' });
    toast({
      variant: 'default',
      title: 'Muvaffaqiyatli',
      description: "Username muvaffaqiyatli o'zgartirildi!",
      duration: 3000, // 3 soniyadan keyin yo'qoladi
    });
    window.location.reload();  // Refresh the page after saving
  };

  return (
    <div className='flex flex-wrap h-[160px]'>
      <h2 className='text-[22px] w-full'>Sizning profilingiz</h2>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your username"
        className="mb-2 w-[400px] h-[50px] mr-[10px]"
      />
      <Button className='h-[50px] w-[120px] flex justify-center items-center' onClick={handleSave}>Save</Button>
    </div>
  );
};

export default Profile;
