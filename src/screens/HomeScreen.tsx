import * as React from 'react';
import styled from 'styled-components/native';
import { ScrollView, SafeAreaView } from 'react-native';
import { Card } from '../components/Card';

export const HomeScreen: React.FC = () => {
  return (
    <Container>
      <SafeArea>
        <Scroll showsVerticalScrollIndicator={false}>
          {cards.map(index => (
            <Card key={index} />
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

const Scroll = styled(ScrollView)`
  height: 100%;
`;

const cards = [1, 2, 3, 4, 5, 6, 7];
