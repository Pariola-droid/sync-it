import { styled } from '@/styles';

import IconAsterisk from '@/app/assets/icons/IconAsterisk';
import {
  cubicBezier,
  motion,
  stagger,
  useAnimate,
  useInView,
} from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { isMobileOnly } from 'react-device-detect';

const smoothEase = cubicBezier(0.25, 0.1, 0.25, 1);
const staggerMenuItems = stagger(0.2, { startDelay: 0.15 });

const Highlight = () => {
  const ref = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(ref, {
    once: true,
    amount: isMobileOnly ? 0 : 0.3,
  });

  const [isHovered, setIsHovered] = useState(0);

  useEffect(() => {
    if (isInView) {
      animate([
        [
          '.highlight-child',
          { opacity: 1 },
          { duration: 1, delay: staggerMenuItems, ease: smoothEase },
        ],
      ]);
    }
  }, [isInView, animate]);

  return (
    <SectionContainer ref={ref}>
      <HighlightSection ref={scope}>
        <HighlightHeading className="highlight-child" initial={{ opacity: 0 }}>
          <IconAsterisk />
          <span>Highlight.</span>
        </HighlightHeading>
        <HighlightGrid className="highlight-child" initial={{ opacity: 0 }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <HighlightCardLink
              href="/"
              key={index}
              onMouseOver={() => setIsHovered(index)}
              onMouseEnter={() => setIsHovered(index)}
            >
              {isHovered === index ? (
                <CardIndicator
                  layoutId="card-indicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              ) : null}
              <HighlightCard key={index}>
                <ImageDisplay></ImageDisplay>
                <TextContent>
                  <CardTitle>Widget grid layout</CardTitle>
                  <CardDesc>
                    Learn how to craft animations that make people feel
                    something
                  </CardDesc>
                </TextContent>
              </HighlightCard>
            </HighlightCardLink>
          ))}
        </HighlightGrid>
      </HighlightSection>
    </SectionContainer>
  );
};

const SectionContainer = styled('section', {
  width: '100%',
});

const HighlightSection = styled(motion.section, {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  rowGap: 'calc(1.88rem - 0.5rem)',
  width: '100%',
});

const HighlightHeading = styled(motion.h2, {
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

const HighlightGrid = styled(motion.div, {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(16.25rem, 1fr))',
  columnGap: '1.88rem',
  rowGap: '1.88rem',
  width: '100%',
});

const HighlightCardLink = styled(Link, {
  width: '100%',
  position: 'relative',
});

const CardIndicator = styled(motion.div, {
  inset: 0,
  backgroundColor: '$alabaster',
  borderRadius: 5,
  position: 'absolute',
  zIndex: -1,
});

const HighlightCard = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.63rem',
  paddingBlock: '0.5rem 1.25rem',
  paddingInline: '0.5rem',
  borderRadius: 5,
  flex: '1 0 0',
  minHeight: '20.625rem',
  zIndex: 1,
  // maxHeight: '20.625rem',
});

const ImageDisplay = styled('div', {
  width: '100%',
  borderRadius: 5,
  height: '13.75rem',
  backgroundColor: '#D9D9D9',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
  },
});

const TextContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: '0.25rem',
});

const CardTitle = styled('h3', {
  fontSize: '1rem',
  fontWeight: '$2',
  color: '$midnight',
  opacity: 0.8,
  lineHeight: 'normal',
});

const CardDesc = styled('p', {
  fontSize: '1rem',
  fontWeight: '$1',
  color: '$granite',
  lineHeight: '1.4rem',
  maxWidth: '100%',
  opacity: 0.8,
});

export default Highlight;
