'use client';

import { styled } from '@/styles';
import Link from 'next/link';

import Footer from '@/components/common/Footer';
// import SideNavigation from '@/components/common/SideNavigation';

export default function Home() {
  return (
    <PageContainer>
      <PageMain>
        <SyncNowButton href="/sync">Sync now</SyncNowButton>
      </PageMain>
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  height: '100vh',
  backgroundColor: '$white',
});

const PageMain = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  maxWidth: '88%',
  marginBlock: '4rem 8rem',
  overflowY: 'auto',

  '@bp1': {
    maxWidth: '40rem',
    marginBlock: '4rem 8rem',
  },
});

const SyncNowButton = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '0.12rem',
  color: '$midnight',
  fontSize: '$display2',
  fontWeight: '$3',
  lineHeight: 'normal',
  textDecoration: 'none',
  opacity: 0.8,
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    width: '110%',
    height: '10%',
    bottom: 0,
    backgroundColor: '$midnight',
    opacity: 0.15,
    zIndex: 1,
    transition: 'opacity 300ms, cubic-bezier(0.4, 0, 0.2, 1) 300ms',
  },

  '&:hover': {
    opacity: 1,

    '&::before': {
      opacity: 0.2,
      height: '35%',
    },
  },
});
