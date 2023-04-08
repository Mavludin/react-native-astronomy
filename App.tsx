import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useCallback, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {StartView} from './screens/Start/StartView';
import {SignInView} from './screens/SignIn/SignInView';
import {RootStackParamList, Routes} from './models/navigation';
import {HomeView} from './screens/Home/HomeView';
import {Provider} from 'react-redux';
import {store} from './store';
import {NoConnectionView} from './screens/NoConnection/NoConnectionView';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const navRef = React.createRef<NavigationContainerRef<RootStackParamList>>();
  const routeNameRef = React.useRef<string>();

  const onNavigationReady = useCallback(() => {
    routeNameRef.current = navRef.current?.getCurrentRoute()?.name;
  }, [navRef]);

  console.log('routeNameRef', routeNameRef.current);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const previousRouteName = routeNameRef.current as Routes;
      const currentRouteName = navRef.current?.getCurrentRoute()
        ?.name as Routes;

      if (!state.isConnected) {
        navRef?.current?.navigate(Routes.NoConnection);
        return;
      }

      if (currentRouteName === Routes.NoConnection && state.isConnected) {
        navRef?.current?.navigate(previousRouteName);
      }

      routeNameRef.current = currentRouteName;
    });

    return unsubscribe;
  }, [navRef]);

  return (
    <Provider store={store}>
      <NavigationContainer onReady={onNavigationReady} ref={navRef}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={Routes.Start}>
          <Stack.Screen name={Routes.Start} component={StartView} />
          <Stack.Screen name={Routes.SignIn} component={SignInView} />
          <Stack.Screen name={Routes.Home} component={HomeView} />
          <Stack.Screen
            name={Routes.NoConnection}
            component={NoConnectionView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
