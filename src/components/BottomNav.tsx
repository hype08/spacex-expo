import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useHistory } from 'react-router-dom';

export const BottomNav: React.FC = () => {
  const history = useHistory();
  return (
    <NavContainer>
      <TouchableOpacity onPress={(): void => history.push('/')}>
        <Icon />
      </TouchableOpacity>
      <TouchableOpacity onPress={(): void => history.push('/Details')}>
        <Icon />
      </TouchableOpacity>
      <TouchableOpacity onPress={(): void => history.push('/')}>
        <Icon />
      </TouchableOpacity>
      <TouchableOpacity onPress={(): void => history.push('/Details')}>
        <Icon />
      </TouchableOpacity>
      <TouchableOpacity onPress={(): void => history.push('/')}>
        <Icon />
      </TouchableOpacity>
    </NavContainer>
  );
};

const NavContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  z-index: 1;
`;

const Icon = styled.View`
  align-items: flex-end;
  flex: 1;
  height: 30px;
  width: 40px;
  padding: 25px;
  border-radius: 12px;
  background-color: #f0f3f5;
  margin: 10px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;
