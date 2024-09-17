import 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken: string;
    provider: string;
    error?: string;
  }
}
