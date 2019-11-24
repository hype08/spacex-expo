import * as React from 'react';
import styled from 'styled-components/native';
import { ScrollView, SafeAreaView } from 'react-native';
import { Story } from '../components/Story';

export const DetailsScreen: React.FC = () => {
  return (
    <Container>
      <SafeArea>
        <Scroll showsHorizontalScrollIndicator={false} horizontal>
          {stories.map(index => (
            <Story key={index} />
          ))}
        </Scroll>
      </SafeArea>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const Button = styled.Button``;

const Scroll = styled(ScrollView)``;

const stories = [1, 2, 3, 4, 5, 6, 7];
