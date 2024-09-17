'use client';

import { styled } from '@/styles';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

import Footer from '@/components/common/Footer';
import IconArrowLeft from '../assets/icons/IconArrowLeft';

const ROUTES: Record<string, number> = {
  '/sync': 25,
  '/sync/choose-playlist': 50,
  '/sync/choose-destination': 75,
  '/sync/summary': 100,
};

const backRoutes: Record<string, string> = {
  '/sync': '/',
  '/sync/choose-playlist': '/sync',
  '/sync/choose-destination': '/sync/choose-playlist',
  '/sync/summary': '/sync/choose-destination',
};

const stepsMeta: Record<string, { heading: string; desc: string }> = {
  '/sync': {
    heading: 'Choose your source',
    desc: 'Select a platform to import your playlist from',
  },
  '/sync/choose-playlist': {
    heading: 'Choose your playlist',
    desc: 'Select a playlist to import',
  },
  '/sync/choose-destination': {
    heading: 'Choose your destination',
    desc: 'Select a platform to export your playlist to',
  },
  '/sync/summary': {
    heading: 'Summary',
    desc: 'Review your selections before syncing',
  },
};

export default function SyncPageLayout(p: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();

  const progress = ROUTES[pathname];
  const { heading, desc } = stepsMeta[pathname];
  const back = backRoutes[pathname];

  return (
    <PageContainer>
      <PageMain>
        <StepLayout>
          <StickyTop>
            <StepMeta>
              <PreviousStepButton onClick={() => router.push(`${back}`)}>
                <IconArrowLeft />
                <span>Back</span>
              </PreviousStepButton>
              <StepHeading>{heading}</StepHeading>
              <StepDesc>{desc}</StepDesc>
            </StepMeta>

            <ProgressMeta>
              <StepProgressLabel>Step {progress / 25} of 4</StepProgressLabel>
              <ProgressBar>
                <ProgressIndicator
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  // css={{ width: `${progress}%` }}
                />
              </ProgressBar>
            </ProgressMeta>
          </StickyTop>
          <StepsWrapper>{p.children}</StepsWrapper>
        </StepLayout>
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
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  maxWidth: '88%',
  marginBlock: '4rem 8rem',
  overflowY: 'hidden',

  '@bp1': {
    maxWidth: '40rem',
    marginBlock: '4rem 8rem',
  },
});

const StepLayout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  width: '100%',
  height: '100%',
  // marginTop: '2rem',
  paddingInline: '1rem',
  position: 'relative',
  overflowY: 'hidden',
  // backgroundColor: 'red',
});

const StickyTop = styled('section', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  position: 'sticky',
  top: 0,
  backgroundColor: '$white',
  zIndex: 2,
  paddingBottom: '1rem',
  borderBottom: '1px solid $alabaster',
});

const StepMeta = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'max-content',
});

const PreviousStepButton = styled('button', {
  width: 'max-content',
  opacity: 0.8,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '0.25rem',
  transition: 'cubic-bezier(0.4, 0, 0.2, 1) 300ms',
  position: 'relative',
  marginBottom: '1.5rem',

  '& span': {
    fontSize: '0.9rem',
    fontWeight: '$3',
    color: '$midnight',
    lineHeight: 'normal',
  },

  '& svg': {
    height: '1.2rem',
    width: '1.2rem',
    transition: 'opacity 300ms',

    '& path': {
      strokeWidth: 2,
    },
  },

  '&:hover': {
    opacity: 0.6,
  },
});

const StepHeading = styled('h2', {
  fontSize: '1rem',
  fontWeight: '$3',
  color: '$midnight',
});

const StepDesc = styled('p', {
  lineHeight: '1.5rem',
  fontSize: '1rem',
  color: '$granite',
});

const ProgressMeta = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '0.5rem',
});

const StepProgressLabel = styled('span', {
  color: '$granite',
  fontSize: '0.875rem',
  fontWeight: '$3',
  lineHeight: 'normal',
});

const ProgressBar = styled('div', {
  width: '100px',
  height: '6px',
  backgroundColor: '$alabaster',
  position: 'relative',
  borderRadius: '$2',
  display: 'flex',
});

const ProgressIndicator = styled(motion.div, {
  height: '100%',
  backgroundColor: '$midnight',
  position: 'absolute',
  borderRadius: 'inherit',
});

const StepsWrapper = styled('div', {
  width: '100%',
  // maxWidth: '34.4rem',
  height: '100%',
  overflowY: 'auto',
  marginBlock: '0 1rem',
  // backgroundColor: 'green',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
