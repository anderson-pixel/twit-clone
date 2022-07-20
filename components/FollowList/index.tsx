import React, { FC } from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

type Props = {
    name: string;
    nickname: string;
}

const FollowList: FC<Props> = ({ name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Follow</FollowButton>
    </Container>
  );
};

export default FollowList;