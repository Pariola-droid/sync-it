import { styled } from '@/styles';

import IconArrowUpRight from '@/app/assets/icons/IconArrowUpRight';
import { format } from 'date-fns';
import {
  cubicBezier,
  motion,
  stagger,
  useAnimate,
  useInView,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

const SOCIAL_LINKS = [
  {
    name: 'x.com',
    url: 'https://www.linkedin.com/in/ipariola',
  },
  {
    name: 'mail.me',
    url: 'mailto:hi@pariola.dev',
  },
  {
    name: 'pariola.dev',
    url: 'https://pariola.dev',
  },
];

const smoothEase = cubicBezier(0.25, 0.1, 0.25, 1);
const staggerMenuItems = stagger(0.2, { startDelay: 0.15 });

const Footer = () => {
  const ref = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      animate([
        [
          '.footer-child',
          { opacity: 1 },
          { duration: 1, delay: staggerMenuItems, ease: smoothEase },
        ],
      ]);
    }
  }, [isInView, animate]);

  return (
    <div ref={ref}>
      <FooterSection ref={scope}>
        <FooterDivider />
        <FooterBaseWrapper className="footer-child" initial={{ opacity: 0 }}>
          <LeftSlot>
            <CopyText>© {format(new Date(), 'yyyy')}</CopyText>
          </LeftSlot>
          <SocialLinks>
            {SOCIAL_LINKS.map((link) => (
              <LinkItem key={`${link.name}-key`}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                  <IconArrowUpRight />
                </a>
              </LinkItem>
            ))}
          </SocialLinks>
        </FooterBaseWrapper>
      </FooterSection>
    </div>
  );
};

const FooterSection = styled(motion.footer, {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  paddingBlock: '0 3rem',
  position: 'absolute',
  bottom: 0,
  left: 0,

  '@bp1': {
    paddingBlock: '0 4rem',
  },
});

const FooterDivider = styled('hr', {
  height: '1px',
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  width: '100%',
  maxWidth: 'unset',
  border: 'none',
  marginBlock: '2.5rem 1.25rem',

  '@bp1': {
    maxWidth: '62.5rem',
  },
});

const FooterBaseWrapper = styled(motion.div, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '95%',

  '@bp1': {
    maxWidth: '34.4rem',
  },

  '& *': {
    fontFamily: '$sanenik',
  },
});

const LeftSlot = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '0.5rem',
  width: 'max-content',
});

const CopyText = styled('small', {
  color: '$granite',
  fontSize: '0.875rem',
  fontWeight: '$1',
  lineHeight: 'normal',
});

const SocialLinks = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  columnGap: '1rem',
  width: 'max-content',
});

const LinkItem = styled('li', {
  '& a': {
    display: 'flex',
    alignItems: 'center',
    columnGap: '0.12rem',
    color: '$granite',
    fontSize: '0.875rem',
    fontWeight: '$1',
    lineHeight: 'normal',
    textDecoration: 'none',
    opacity: 0.8,
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '80%',
      height: '10%',
      bottom: 0,
      backgroundColor: '$midnight',
      opacity: 0.15,
      zIndex: -1,
      transition: 'opacity 300ms, cubic-bezier(0.4, 0, 0.2, 1) 300ms',
    },

    '&:hover': {
      opacity: 1,

      '&::before': {
        opacity: 0.2,
        height: '35%',
      },
    },
  },

  '& svg': {
    height: '0.75rem',
    width: '0.75rem',
    marginTop: 'auto',

    '& path': {
      stroke: '$granite',
      strokeWidth: '2.5',
    },
  },
});

export default Footer;
