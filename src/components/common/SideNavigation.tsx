import IconChevronRight from '@/app/assets/icons/IconChevronRight';
import { styled } from '@/styles';

const SideNavigation = () => {
  return (
    <StyledSideNav>
      <StepList>
        <StepCol>
          Select source
          <SuspendedSlot>
            <IconChevronRight />
          </SuspendedSlot>
        </StepCol>
        <StepCol>
          Choose playlist
          <SuspendedSlot>
            <IconChevronRight />
          </SuspendedSlot>
        </StepCol>
        <StepCol>
          Choose destination
          <SuspendedSlot>
            <IconChevronRight />
          </SuspendedSlot>
        </StepCol>
        <StepCol>
          Summary
          <SuspendedSlot>
            <IconChevronRight />
          </SuspendedSlot>
        </StepCol>
      </StepList>
      <ProgressIndicator />
    </StyledSideNav>
  );
};

const StyledSideNav = styled('header', {
  width: '100%',
  height: '50px',
  position: 'sticky',
  top: '0',
  borderRadius: '$1',
});

const StepList = styled('ul', {
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  listStyle: 'none',
  backgroundColor: '$offWhite',
  borderRadius: 'inherit',

  '& *': {
    lineHeight: 'normal',
    fontSize: '0.875rem',
    color: '$midnight',
  },
});

const StepCol = styled('li', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'disabled',
  transition: 'background-color 0.3s',
  opacity: '0.2',
  fontWeight: '$1',
  position: 'relative',

  '&:first-child': {
    opacity: '0.8',
    cursor: 'pointer',
  },

  '&:hover': {
    backgroundColor: '#FAFBFB',
  },
});

const SuspendedSlot = styled('span', {
  position: 'absolute',
  right: '-15px',
  opacity: 'inherit',
  display: 'none',

  '& svg': {
    width: '30px',
    height: '30px',

    '& path': {
      strokeWidth: '1',
    },
  },
});

const ProgressIndicator = styled('div', {
  width: '25%',
  height: '2px',
  backgroundColor: '$midnight',
  position: 'absolute',
  bottom: '0',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
});

export default SideNavigation;
