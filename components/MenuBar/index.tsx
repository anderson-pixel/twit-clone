import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>lorem</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>lorem</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>lorem</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>lorem</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>lorem</span>
        </MenuButton>

        <Button>
          <span>lorem</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>lorem</strong>
          <span>lorem</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;