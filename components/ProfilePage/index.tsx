import React from 'react';

import {
        Container,
        Banner,
        Avatar,
        ProfileData,
        LocationIcon,
        CakeIcon,
        Followage,
        EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit profile</EditButton>
        <h1>lorem</h1>
        <h2>lorem</h2>

        <p>
        lorem
        </p>

        <ul>
          <li>
            <LocationIcon />
            lorem
          </li>
          <li>
            <CakeIcon />
            lorem
          </li>
        </ul>

        <Followage>
          <span>
          following <strong>94</strong>
          </span>
          <span>
            <strong>99 </strong> followers
          </span>
        </Followage>
      </ProfileData>

    </Container>
  );
};

export default ProfilePage;