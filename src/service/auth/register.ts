"use server";

interface RegisterType {
  username: string;
  email: string;
  password: string;
}

export const register = async (registerData: RegisterType) => {
  const res = await fetch("http://localhost:3000/register", {
    headers: {
      "Content-Type": "application/json", 
    },
    method: "POST",
    body: JSON.stringify(registerData),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Serverda xato yuz berdi");
  }
  const data = await res.json();
  return data;
};
