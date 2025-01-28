
"use server";

import { cookies } from "next/headers";

interface LoginDataR{
    accessToken: string,
    user: { email: string, username: string, id: number }
  }
export const login = async(loginData:{email:string,password:string}) => {
      const res = await fetch("http://localhost:3000/login", {
          headers: {
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(loginData),
        });
      
        if (!res.ok) {
          const err = await res.json(); 
          throw new Error(err.message || "Serverda xato yuz berdi");
        }
      
        const data:LoginDataR = await res.json();
        cookies().set('userName',data.user.username)
        cookies().set('user',JSON.stringify(data))
        return data;
    
  }
  