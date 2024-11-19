import {NextRequest, NextResponse} from "next/server";

export function middleware(request:NextRequest){
    const {pathname} = request.nextUrl;

    const referrer = request.headers.get('referer');

    if (pathname === '/main') {
        return NextResponse.next();
    }

    if (!referrer) {
        return NextResponse.redirect(new URL('/main', request.url));
    }

    return NextResponse.next();
}