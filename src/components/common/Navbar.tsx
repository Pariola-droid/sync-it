import { styled } from '@/styles';

import { cubicBezier, motion } from 'framer-motion';
import Link from 'next/link';

const smoothEase = cubicBezier(0.25, 0.1, 0.25, 1);

const Navbar = () => {
  return (
    <NavbarSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.15, ease: smoothEase }}
    >
      <NavbarWrapper>
        <MainText>
          <Link href="/" aria-label="Navigate to homepage">
            Pariola.
          </Link>
        </MainText>
        <SubText>Frontend Engineer</SubText>
      </NavbarWrapper>
    </NavbarSection>
  );
};

const NavbarSection = styled(motion.nav, {
  display: 'grid',
  placeItems: 'center',
  width: '100%',
  paddingBlock: '3rem 0',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2,

  '@bp1': {
    paddingBlock: '4rem 0',
  },
});

const NavbarWrapper = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '88%',

  '@bp1': {
    maxWidth: '34.4rem',
  },

  '& *': {
    lineHeight: 'normal',
    fontSize: '1rem',
    color: '$midnight',
  },
});

const MainText = styled('h1', {
  fontWeight: '$3',
});

const SubText = styled('p', {
  opacity: '0.6',
  fontWeight: '$1',
});

export default Navbar;
