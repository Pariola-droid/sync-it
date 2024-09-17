import { styled } from '@/styles';

import React, { useRef, useEffect, PropsWithChildren } from 'react';
import Link from 'next/link';
import {
  useInView,
  motion,
  stagger,
  useAnimate,
  cubicBezier,
} from 'framer-motion';
import IconGridMasonry from '@/app/assets/icons/IconGridMasonry';
import IconArrowRight from '@/app/assets/icons/IconArrowRight';

interface UiComponentProps extends PropsWithChildren<{}> {
  seeMore?: boolean;
}

const smoothEase = cubicBezier(0.25, 0.1, 0.25, 1);
const staggerMenuItems = stagger(0.2, { startDelay: 0.15 });

const UiComponent = (p: UiComponentProps) => {
  const ref = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      animate([
        [
          '.ui-child',
          { opacity: 1 },
          { duration: 1, delay: staggerMenuItems, ease: smoothEase },
        ],
      ]);
    }
  }, [isInView, animate]);
  return (
    <SectionContainer ref={ref}>
      <UiSection ref={scope}>
        <UiHeading className="ui-child" initial={{ opacity: 0 }}>
          <IconGridMasonry />
          <span>UI Components.</span>
        </UiHeading>
        <UiList className="ui-child" initial={{ opacity: 0 }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <ListItemLink href="/ui" key={index}>
              <UiListItem>
                <ItemTitle>Env input field</ItemTitle>
                <ItemDesc>
                  Learn how to craft animations that make people feel something
                </ItemDesc>
              </UiListItem>
            </ListItemLink>
          ))}
        </UiList>
        {p.seeMore && (
          <SeeMore>
            <Link href="/ui" scroll={true}>
              <span>See more</span>
              <IconArrowRight />
            </Link>
          </SeeMore>
        )}
      </UiSection>
    </SectionContainer>
  );
};

const SectionContainer = styled('section', {
  width: '100%',
});

const UiSection = styled(motion.section, {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  rowGap: 'calc(1.88rem - 0.5rem)',
  width: '100%',
});

const UiHeading = styled(motion.h2, {
  fontSize: '1rem',
  fontWeight: '$3',
  color: '$midnight',
  lineHeight: 'normal',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  '& svg': {
    height: '1.5rem',
    width: '1.5rem',
    opacity: 0.8,
  },
});

const UiList = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: 'calc(1.88rem - 0.5rem)',
  width: '100%',
});

const ListItemLink = styled(Link, {
  width: '100%',
});

const UiListItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  rowGap: '0.125rem',
  width: '100%',
  paddingInline: '0.5rem',
  paddingBlock: '0.5rem',
  cursor: 'pointer',
  transition: 'all 300ms ease',
  borderRadius: 5,
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-0.5rem',
    width: 'calc(100% + 1rem)',
    height: 'calc(100% + 1rem)',
    borderRadius: 'inherit',
    pointerEvents: 'none',
    transition: 'all 300ms ease',
    opacity: 0,
  },

  '&:hover': {
    '&::before': {
      backgroundColor: '$alabaster',
      opacity: 1,
    },
  },
});

const ItemTitle = styled('h3', {
  fontSize: '1rem',
  fontWeight: '$2',
  color: '$midnight',
  opacity: 0.8,
  lineHeight: 'normal',
});

const ItemDesc = styled('p', {
  fontSize: '1rem',
  fontWeight: '$1',
  color: '$granite',
  lineHeight: '1.4rem',
  maxWidth: '100%',
  opacity: 0.8,
});

const SeeMore = styled('div', {
  width: '100%',

  '& a': {
    width: 'max-content',
    fontSize: '0.9rem',
    fontWeight: '$2',
    color: '$midnight',
    textDecoration: 'none',
    opacity: 0.8,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.25rem',
    lineHeight: 'normal',
    transition: 'opacity 300ms, cubic-bezier(0.4, 0, 0.2, 1) 300ms',
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      height: '110%',
      left: '-0.2rem',
      width: '0%',
      borderRadius: 'inherit',
      pointerEvents: 'none',
      transition: 'all 300ms ease',
      backgroundColor: '$midnight',
      opacity: 0.15,
    },

    '& svg': {
      height: '1rem',
      width: '1rem',
      transition: 'opacity 300ms',

      '& path': {
        strokeWidth: 2,
      },
    },

    '&:hover': {
      opacity: 0.6,

      '&::before': {
        width: '30%',
      },
    },
  },
});

export default UiComponent;
