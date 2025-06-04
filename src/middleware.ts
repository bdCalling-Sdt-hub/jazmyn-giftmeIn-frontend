import { NextRequest, NextResponse } from 'next/server';

export async function middleware(Request: NextRequest) {
  try {
    const url = await Request.nextUrl.pathname;
    const searchParams = Request.nextUrl.searchParams;
    const accessToken = searchParams.get('token') || '';

    if (url === '/dashboard/surveys' && accessToken) {
      {
        // Set cookies
        const response = NextResponse.redirect(new URL('/dashboard/surveys', Request.url));

        response.cookies.set('accessToken', accessToken, {
          // httpOnly: true,
          path: '/',
          secure: false,
          sameSite: 'lax',
        });

        return response;
      }
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/dashboard/surveys'],
};
