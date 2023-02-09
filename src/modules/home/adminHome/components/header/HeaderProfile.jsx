import { useState } from 'react';
import { styled } from 'baseui';
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { logout } from 'action/auth';

const ProfileContainer = styled('div', ({ $theme }) => ({
  color: '#179926',
  backgroundColor: '#ffffff',
  display: 'flex',
  padding: '0.5rem',
  borderRadius: '100%',
  cursor: 'pointer',
  marginLeft: '20px',
  ':hover': {
    backgroundColor: $theme.colors.accent50,
  },
  position: 'relative',
}));

const ModalContainer = styled('div', () => ({
  backgroundColor: '#ffffff',
  boxShadow: '1px 1px 10px #e0e0e0',
  width: '200px',
  position: 'absolute',
  top: '35px',
  right: '0px',
  borderRadius: '1rem',
  zIndex: 999,
}));

const ModalItem = styled('div', ({ $theme }) => ({
  position: 'relative',
  color: $theme.colors.accent,
  width: '100%',
  textAlign: 'center',
  padding: '10px 0',
  borderRadius: '1rem',
  ':hover': {
    backgroundColor: '#e5e7eb82',
  },
}));

const Separator = styled('div', ({ $theme }) => ({
  position: 'relative',
  width: '50%',
  margin: '0 auto',
  borderBottom: `1px solid #d1d1d1`,
}));

const ModalBackdrop = styled('div', ({ $theme }) => ({
  backgroundColor: 'transparent',
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 100,
}));

const HeaderProfile = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout());
  };

  return (
    <ProfileContainer onClick={() => setOpen(!open)}>
      <BsPersonCircle />
      {open && (
        <>
          <ModalBackdrop onClick={() => setOpen(false)} />
          <ModalContainer>
            <ModalItem onClick={onClickLogout}>Log out</ModalItem>
          </ModalContainer>
        </>
      )}
    </ProfileContainer>
  );
};

export default HeaderProfile;
