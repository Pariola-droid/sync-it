import pkg from '../../package.json';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const SITE_DOMAIN =
  process.env.NEXT_PUBLIC_SITE_DOMAIN! || process.env.NEXT_PUBLIC_VERCEL_URL!;
export const SITE_PROTOCOL = IS_PRODUCTION ? 'https' : 'http';
export const SITE_BASE_URL = `${SITE_PROTOCOL}://${SITE_DOMAIN}`;

export const APP_NAME = pkg.name;
export const APP_VERSION = pkg.version;

// PLATFORMS
