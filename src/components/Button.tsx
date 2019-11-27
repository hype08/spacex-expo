import * as React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface ButtonProps {
  text: string;
}
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <Container>
      <StyledText>{props.text}</StyledText>
    </Container>
  );
};

export default Button;

const Container = styled(TouchableOpacity)`
  height: 50px;
  width: 130px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }): string => theme.colors.primary};
  margin: 25px;
`;

const StyledText = styled.Text`
  color: ${({ theme }): string => theme.colors.background};
  text-transform: uppercase;
`;
