import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Autorise GTM + GA4
  const csp = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://assets.calendly.com https://us-assets.i.posthog.com https://eu-assets.i.posthog.com; script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://assets.calendly.com https://us-assets.i.posthog.com https://eu-assets.i.posthog.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com https://assets.calendly.com; font-src 'self' https://fonts.gstatic.com https://assets.calendly.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com https://*.googleapis.com https://*.g.doubleclick.net https://calendly.com https://assets.calendly.com https://us.i.posthog.com https://us-assets.i.posthog.com https://eu.i.posthog.com https://eu-assets.i.posthog.com; frame-src 'self' https://www.googletagmanager.com https://calendly.com;"
  
  response.headers.set('Content-Security-Policy', csp)
  
  return response
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
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
