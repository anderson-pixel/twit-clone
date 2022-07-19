import React from 'react';
import { Feed } from 'styled-icons/material-outlined';
import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>uhkukhuk</strong>
          <span>6kijl</span>
        </ProfileInfo>
      </Header>

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>

      <ProfilePage/>
    </Container>
  );
};

export default Main;