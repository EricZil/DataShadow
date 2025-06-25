import type { NextConfig } from "next";

const csp = `
  default-src 'self';
  connect-src 'self' ${process.env.NEXT_PUBLIC_API_URL};
  img-src 'self' https://summer.hackclub.com https://avatars.githubusercontent.com;
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  frame-src 'self' https://status.datashadow.eryxks.xyz;
`.replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: csp
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "Referrer-Policy",
    value: "no-referrer"
  }
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
