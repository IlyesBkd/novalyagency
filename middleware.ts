import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Autorise GTM + GA4 + Google Ads + Vercel Analytics
  const csp = [
    "default-src 'self'",
    // Scripts
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://assets.calendly.com https://us-assets.i.posthog.com https://eu-assets.i.posthog.com https://va.vercel-scripts.com",
    "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://assets.calendly.com https://us-assets.i.posthog.com https://eu-assets.i.posthog.com https://va.vercel-scripts.com",
    // Styles
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com https://assets.calendly.com",
    // Fonts
    "font-src 'self' https://fonts.gstatic.com https://assets.calendly.com",
    // Images
    "img-src 'self' data: https: blob:",
    // Connections (API calls) - Google Ads needs multiple domains for conversion tracking
    "connect-src 'self' https://www.google.com https://*.google.com https://*.google.co.uk https://*.google.fr https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com https://*.googleapis.com https://*.g.doubleclick.net https://*.doubleclick.net https://www.googleadservices.com https://googleads.g.doubleclick.net https://calendly.com https://assets.calendly.com https://us.i.posthog.com https://us-assets.i.posthog.com https://eu.i.posthog.com https://eu-assets.i.posthog.com https://va.vercel-scripts.com https://vitals.vercel-insights.com",
    // Frames
    "frame-src 'self' https://www.googletagmanager.com https://calendly.com https://www.google.com",
  ].join("; ")
  
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
