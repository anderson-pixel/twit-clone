import React from 'react';
import { Feed } from 'styled-icons/material-outlined';
import FollowList from '../FollowList';
import ProfilePage from '../ProfilePage';
import Tweet from '../Tweet';

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
      <Tweet/>
      <Tweet/>
      <FollowList name='abudab' nickname='abudeb' />
    </Container>
  );
};

export default Main;