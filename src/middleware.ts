import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get("accessToken")?.value;
    if (request.nextUrl.pathname.startsWith("/news") && !accessToken) {
        return NextResponse.redirect(new URL("/sign-up", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/:path*"]
}