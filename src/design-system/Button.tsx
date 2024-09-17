import Spinner from './Spinner';
import { styled } from '@/styles';
import { Button as RadixButton } from '@radix-ui/themes';
import React from 'react';
export { IconButton } from '@radix-ui/themes';

export type ButtonVariants = 'primary' | 'secondary';
export type ButtonSizes = 'default' | 'special';
export type ButtonType = 'button' | 'submit' | 'reset';
export interface ButtonProps {
  type?: ButtonType;
  loading?: boolean;
  variant: ButtonVariants;
  size: ButtonSizes;
  width: 'full' | 'fit';
  as?: React.ElementType;
  children?: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled(RadixButton, {
  // Reset
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'center',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  position: 'relative',
  backgroundColor: '$darkGreen',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  transition: 'opacity 0.2s ease-in-out',

  '&:disabled': {
    pointerEvents: 'none',
    opacity: '0.5',
  },

  '&:hover': {
    opacity: '0.8',
  },

  '& span': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    lineHeight: 'normal',
    letterSpacing: '0.02625rem',

    '&>svg': {
      width: 'inherit',
      height: 'inherit',
    },
  },

  variants: {
    width: {
      full: {
        width: '100%',
        minWidth: '100%',
      },
      fit: {
        minWidth: '4.8rem',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$darkGreen',
        color: '#FEFFFA',
      },
      secondary: {
        backgroundColor: '$zuccini',
        color: '$white',
      },
      success: {
        backgroundColor: '$nGreen',
        color: '$white',
      },
      error: {
        backgroundColor: '$nRed',
        color: '$white',
      },
      link: {
        backgroundColor: 'transparent',
        color: '$darkGreen',
        cursor: 'pointer',
      },
    },
    size: {
      default: {
        fontWeight: '$2',
        borderRadius: '4rem',
        padding: '0.75rem 1.5rem',
      },
      special: {
        fontWeight: '$3',
        borderRadius: '0.5rem',
        padding: '1.2rem 1.5rem',
      },
    },
    loading: {
      true: {
        cursor: 'progress',
        pointerEvents: 'none',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    width: 'fit',
    size: 'default',
  },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, loading, onClick, ...rest } = props;
    return (
      <StyledButton onClick={() => props?.onClick?.()} ref={ref} {...rest}>
        {props.loading && (
          <Spinner
            style={{
              position: 'absolute',
              top: 'calc(50% - 9px)',
              left: 'calc(50% - 9px)',
            }}
            size={18}
          />
        )}
        <span style={{ visibility: props.loading ? 'hidden' : 'visible' }}>
          {children}
        </span>
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
// Button.toString = () => '.button';

export default Button;
