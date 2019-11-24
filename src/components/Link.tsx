import * as React from 'react';
import styled from 'styled-components/native';

const Link: React.FC = props => {
  return <TextContainer>{props.feed.content}</TextContainer>;
};

export default Link;

const TextContainer = styled.Text`
  background-color: #f0f3f5;
  font-size: 18px;
`;
