import { cookies } from "next/headers";

const getAuthStatus = () => {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user"); 
  return !!userCookie;
};

export default getAuthStatus;
