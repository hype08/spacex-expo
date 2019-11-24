import * as React from 'react';
import styled from 'styled-components/native';
import LinkList from './LinkList';

export const Card: React.FC = () => {
  return (
    <Container>
      <Content>
        <LinkList />
      </Content>
    </Container>
  );
};

const Container = styled.View`
  height: 150px;
  width: 315px;
  background-color: #ffffff;
  justify-content: center;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
`;

const Content = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;
