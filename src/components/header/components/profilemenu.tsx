// src/components/header/components/ProfileMenu.server.tsx
"use server";
import { cookies } from "next/headers";


export async function ProfileMenu() {
  const user = cookies().get('user')?.value;
  const userName = cookies().get('userName')?.value;


  return { user, userName };
}
