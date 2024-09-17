import { styled } from '@/styles';

import React, { useRef, useEffect } from 'react';
import {
  useInView,
  motion,
  stagger,
  useAnimate,
  cubicBezier,
} from 'framer-motion';
import IconArrowUpRight from '@/app/assets/icons/IconArrowUpRight';

const smoothEase = cubicBezier(0.25, 0.1, 0.25, 1);
const staggerMenuItems = stagger(0.2, { startDelay: 0.15 });

const Header = () => {
  const ref = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      animate([
        [
          '.header-parent',
          { opacity: 1 },
          { duration: 0.15, ease: smoothEase },
        ],
        [
          '.header-child',
          { opacity: 1 },
          { duration: 1, delay: staggerMenuItems, ease: smoothEase },
        ],
      ]);
    }
  }, [isInView, animate]);

  return (
    <div ref={ref}>
      <HeaderContainer ref={scope}>
        <HeaderContent className="header-parent" initial={{ opacity: 0 }}>
          <motion.p className="header-child" initial={{ opacity: 0 }}>
            I like to build functional user interface with a keen focus on
            aesthetics and user experience.
          </motion.p>
          <br />
          <motion.p className="header-child" initial={{ opacity: 0 }}>
            This space showcases my creative digital explorations and innovative
            snippets, with more comprehensive work available at{' '}
            <a
              href="https://pariola.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>pariola.dev</span> <IconArrowUpRight />
            </a>
          </motion.p>
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
};

const HeaderContainer = styled(motion.header, {
  display: 'grid',
  placeItems: 'center',
  width: '100%',
});

const HeaderContent = styled(motion.div, {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',

  '& *': {
    lineHeight: '1.5rem',
    fontSize: '1rem',
    color: '$granite',
  },

  '& a': {
    position: 'relative',
    color: '$midnight',
    fontWeight: '$2',
    display: 'inline-flex',
    alignItems: 'flex-end',
    opacity: 0.8,
    columnGap: '0.12rem',

    '& svg': {
      height: '0.75rem',
      width: '0.75rem',
      marginBottom: '0.3rem',

      '& path': {
        stroke: '$granite',
        strokeWidth: '2.5',
      },
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '85%',
      height: '10%',
      bottom: 2,
      backgroundColor: '$midnight',
      opacity: 0.15,
      zIndex: -1,
      transition: 'opacity 300ms, cubic-bezier(0.4, 0, 0.2, 1) 300ms',
    },

    '&:hover': {
      opacity: 1,

      '&::before': {
        opacity: 0.2,
        height: '30%',
      },
    },
  },
});

export default Header;
