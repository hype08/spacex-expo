import * as React from 'react';
import styled from 'styled-components/native';

export const LaunchTile: React.FC = () => {
  return (
    <Container>
      <Content />
    </Container>
  );
};

const Container = styled.View`
  height: 150px;
  width: 315px;
  justify-content: center;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  background: ${({ theme }): string => theme.colors.textSecondary};
`;

const Content = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;
