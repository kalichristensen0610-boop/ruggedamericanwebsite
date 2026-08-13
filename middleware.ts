import {NextRequest,NextResponse} from 'next/server';

const LEGACY_STYLESHEET='/_next/static/css/4d5f02750de58ca3.css';

export function middleware(request:NextRequest){
  if(request.nextUrl.pathname===LEGACY_STYLESHEET){
    const response=NextResponse.rewrite(new URL('/legacy-main-site.css',request.url));
    response.headers.set('Cache-Control','public, max-age=300, must-revalidate');
    return response;
  }

  const response=NextResponse.next();
  response.headers.set('Cache-Control','no-cache, no-store, must-revalidate');
  response.headers.set('CDN-Cache-Control','no-store');
  return response;
}

export const config={
  matcher:[
    '/_next/static/css/4d5f02750de58ca3.css',
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
