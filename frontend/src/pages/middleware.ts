import { NextResponse, NextRequest } from 'next/server'

// BUG: Middleware not working because 
// import routerProvider from "@refinedev/nextjs-router"
// used on ./_refine_context.tsx

export async function middleware(request: NextRequest) {
  const slug = request.nextUrl.pathname;
  return NextResponse.redirect('https://wikipedia.org', 304);
}

export const config = {
  matcher: '/:path',
}