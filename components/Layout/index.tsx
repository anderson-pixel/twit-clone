import React from 'react';

import { Container, Wrapper } from './styles';

const Layout = ({children}: any) => {
  return (
    <Container>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  );
};

export default Layout;