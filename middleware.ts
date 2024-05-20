import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";

interface Routes {
  [key: string]: boolean;
}

const publicOnlyURLs: Routes = {
  "/": true,
  "/login": true,
  "/sms": true,
  "/create-account": true,
  "/github/start": true,
  "/github/complete": true,
};

export const middleware = async (request: NextRequest) => {
  const session = await getSession();
  const exist = publicOnlyURLs[request.nextUrl.pathname];

  // 로그아웃
  if (!session.id) {
    //로그아웃 상태인데 로그인했을때 갈수있는 페이지로 이동하려는 경우
    if (!exist) return NextResponse.redirect(new URL("/", request.url));
  }
  // 로그인
  else {
    // 로그인 상태인데 로그아웃 상태일때만 이용가능한 페이지로 이동하려는 경우
    if (exist) return NextResponse.redirect(new URL("/product", request.url));
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
