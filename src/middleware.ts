import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const user = await cookies().get('user')?.value

  if (!user) {
    return NextResponse.redirect(new URL('/', request.url))  
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/profile/:path*',  
}
