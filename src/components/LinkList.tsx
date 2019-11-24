import * as React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Link from './Link';

const FEED_QUERY = gql`
  {
    feed {
      content
      id
    }
  }
`;

const LinkList: React.FC = () => {
  return (
    <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Text>Fetching</Text>;
        if (error) return <Text>Error</Text>;

        const linksToRender = data.feed;

        return (
          <ListContainer>
            {linksToRender.map(feed => (
              <Link key={feed.id} feed={feed} />
            ))}
          </ListContainer>
        );
      }}
    </Query>
  );
};

export default LinkList;

const ListContainer = styled.View`
  height: 100%;
  padding: 10px;
  justify-content: center;
`;
