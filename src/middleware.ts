import { fetchAuthSession } from 'aws-amplify/auth/server';
import { NextRequest, NextResponse } from 'next/server';
import { runWithAmplifyServerContext } from '@/app/amplify-server';
import { fetchUserByUserId } from '@/app/actions/user.actions';
import { UserRole } from '@/API';

const authRoutes = [
  '/',
  '/users/sign-in',
  '/users/sign-up',
  '/organizations/sign-in',
  '/organizations/sign-up',
];

const usersMainPage = '/users/tickets';
const orgMainPage = '/organizations/tickets';

export async function middleware(request: NextRequest) {
  try {
    const response = NextResponse.next();
    const { pathname } = request.nextUrl;
    const userSession = await runWithAmplifyServerContext({
      nextServerContext: { request, response },
      operation: async (contextSpec) => {
        try {
          const session = await fetchAuthSession(contextSpec);
          return session;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    });

    if (!userSession) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    const authenticated = userSession.tokens !== undefined;

    if (!authenticated && authRoutes.includes(pathname)) {
      return response;
    }
    if (!authenticated && pathname === '/') {
      return response;
    }

    const user = await fetchUserByUserId(userSession.userSub as string);

    if (authenticated && authRoutes.includes(pathname)) {
      if (user.role === UserRole.USER) {
        return NextResponse.redirect(new URL(usersMainPage, request.url));
      }
      if (user.role === UserRole.ORGANIZATION) {
        return NextResponse.redirect(new URL(orgMainPage, request.url));
      }
    }

    if (
      authenticated &&
      user.role === UserRole.USER &&
      pathname.startsWith('/organizations')
    ) {
      return NextResponse.redirect(new URL(usersMainPage, request.url));
    }

    if (
      authenticated &&
      user.role === UserRole.ORGANIZATION &&
      pathname.startsWith('/users')
    ) {
      return NextResponse.redirect(new URL(orgMainPage, request.url));
    }

    if (authenticated) {
      return response;
    }

    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sign-in).*)',
  ],
};
