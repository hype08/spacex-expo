import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { useMediaQuery } from 'react-responsive';
import { View, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { client } from './apollo';
import { Route, Router, Switch } from './routes/index';
import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import { BottomNav } from './components/BottomNav';
import '@expo/match-media';
import { theme } from './theme';

const App: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: '(max-device-width: 1224px)',
  // });
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 50 }}>
          {isDesktopOrLaptop && <Text> 🖥️</Text>}
          {isTabletOrMobile && <Text> 📱</Text>}
        </View>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/Details" component={DetailsScreen} />
          </Switch>
          <BottomNav />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
