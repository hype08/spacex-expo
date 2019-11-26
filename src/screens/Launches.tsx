import * as React from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { SafeAreaView, ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { LaunchTile } from '../components/LaunchTile';

export const LAUNCH_TILE_DATA = gql`
  fragment LaunchTile on Launch {
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
`;

const GET_LAUNCHES = gql`
  query launchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

export const Launches: React.FC = () => {
  const { data, loading, error } = useQuery(GET_LAUNCHES);
  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>error</Text>;
  return (
    <SafeArea>
      <Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        >
          {data.launches.launches.map(launch => (
            <LaunchTile key={launch.id} mission={launch.mission} />
          ))}
        </ScrollView>
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
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 18px;
  color: ${({ theme }): string => theme.colors.text};
`;
