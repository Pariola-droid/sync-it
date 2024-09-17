import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!session || !token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Update the token with the new role
  token.role = 'destination';

  // Here you would typically update the session in your database
  // For this example, we're using the built-in NextAuth session management

  // Redirect to the summary page
  res.redirect('/sync/summary');
}
