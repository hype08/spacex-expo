import * as React from 'react';
import styled from 'styled-components/native';

export const Story: React.FC = () => {
  return (
    <Container>
      <Content />
    </Container>
  );
};

const Container = styled.View`
  height: 600px;
  width: 300px;

  background-color: ${({ theme }): string => theme.colors.grey};
  justify-content: center;
  border-radius: 8px;
  margin: 38px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
`;

const Content = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;
