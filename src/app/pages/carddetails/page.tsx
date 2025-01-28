import React from 'react'
import CartDetails from '@/components/CartDetails/CartDetails'
import { cookies } from 'next/headers'

const CardDetail = () => {
    const cookiesData = cookies();
    const user = cookiesData.get('user')?.value || null;
    const userName = cookiesData.get('userName')?.value || null;
  
  return (
    <div>
        <CartDetails user={user}/>
    </div>
  )
}

export default CardDetail