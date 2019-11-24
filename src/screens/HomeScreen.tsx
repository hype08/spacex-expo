import * as React from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { SafeAreaView } from 'react-native';

const GET_LAUNCHES = gql`
  query launchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        id
        isBooked
        rocket {
          id
          name
        }
        mission {
          name
          missionPatch
        }
      }
    }
  }
`;

export const HomeScreen: React.FC = () => {
  return (
    <Container>
      <SafeArea>
        <StyledText>Text</StyledText>
      </SafeArea>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }): string => theme.colors.background};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const StyledText = styled.Text`
  color: ${({ theme }): string => theme.colors.accent};
`;
