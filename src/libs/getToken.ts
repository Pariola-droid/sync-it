import { createClient } from '@supabase/supabase-js';
import { refreshAccessToken } from './refreshToken';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getValidToken(userId: string, platform: string) {
  const { data: connection } = await supabase
    .from('user_platform_connections')
    .select('access_token, expires_at')
    .eq('user_id', userId)
    .eq('platform', platform)
    .single();

  if (new Date(connection.expires_at) <= new Date()) {
    await refreshAccessToken(userId, platform);
    return getValidToken(userId, platform);
  }

  return connection.access_token;
}
