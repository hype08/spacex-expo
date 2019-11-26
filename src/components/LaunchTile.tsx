import * as React from 'react';
import styled from 'styled-components/native';

interface LaunchTileProps {
  id;
  mission;
}

export const LaunchTile: React.FC<LaunchTileProps> = (launch: LaunchTileProps) => {
  const { mission, id } = launch;
  return (
    <Container>
      <Content>
        <StyledImage key={id} source={{ uri: mission.missionPatch }} />
        <Text key={id}>{mission.name}</Text>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  height: 350px;
  width: 315px;
  justify-content: center;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  background: ${({ theme }): string => theme.colors.grey};
`;

const Content = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: ${({ theme }): string => theme.colors.text};
  margin: 20px;
`;

const StyledImage = styled.Image`
  height: 150px;
  width: 150px;
`;
