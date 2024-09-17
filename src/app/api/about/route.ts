import { NextResponse, NextRequest } from 'next/server';
import { APP_NAME, APP_VERSION } from '@/config/env';

export async function GET(request: NextRequest) {
  const healthData = {
    name: APP_NAME,
    version: APP_VERSION,
    description: 'This is a health check',
  };

  return NextResponse.json(
    { status: true, message: 'This is just a health', data: healthData },
    { status: 200 }
  );
}
