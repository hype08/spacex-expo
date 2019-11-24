import * as React from 'react';
import styled from 'styled-components/native';

const Header: React.FC = ({ ...props } = {}) => {
  return <StyledText {...props} />;
};

export default Header;

const StyledText = styled.Text`
  font-weight: bold;
  padding-bottom: 8px;
  font-size: 24px;
`;
