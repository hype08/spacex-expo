import * as React from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { SafeAreaView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import Button from '../components/Button';
import { LaunchTile } from '../components/LaunchTile';

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

export const Launches: React.FC = () => {
  const { error } = useQuery(GET_LAUNCHES);
  if (error) return <p>ERROR</p>;

  return (
    <SafeArea>
      <Container>
        <LaunchTile />
        <Button text="load more" />
      </Container>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }): string => theme.colors.background};
  align-items: center;
`;
