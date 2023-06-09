import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {StartView} from './screens/Start/StartView';
import {SignInView} from './screens/SignIn/SignInView';
import {RootStackParamList, Routes} from './utils/navigation';
import {HomeView} from './screens/Home/HomeView';
import {NoConnectionView} from './screens/NoConnection/NoConnectionView';
import {useAppDispatch, useAppSelector} from './store/hooks';
import {UserData, selectIsLoggedIn, signIn} from './store/slices/auth';
import {getDataFromAsyncStorage} from './utils/asyncStorage';
import {SplashView} from './screens/Splash/SplashView';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const navRef = React.createRef<NavigationContainerRef<RootStackParamList>>();
  const routeNameRef = React.useRef<string>();

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const onNavigationReady = useCallback(() => {
    routeNameRef.current = navRef.current?.getCurrentRoute()?.name;
  }, [navRef]);

  // Проверка подключения к интернету
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

  // Проверка вошел ли пользователь в аккаунт ранее
  useEffect(() => {
    setIsLoading(true);
    const checkAsyncStorage = async () => {
      const data = await getDataFromAsyncStorage('userData');

      if (data) {
        const userData = JSON.parse(data) as UserData;
        dispatch(signIn(userData));
      }

      setIsLoading(false);
    };

    checkAsyncStorage();
  }, [dispatch]);

  if (isLoading) {
    return <SplashView />;
  }

  return (
    <NavigationContainer onReady={onNavigationReady} ref={navRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Routes.Start}>
        <>
          {isLoggedIn ? (
            <Stack.Screen
              name={Routes.Home}
              component={HomeView}
              options={{
                animationTypeForReplace: 'pop',
              }}
            />
          ) : (
            <>
              <Stack.Screen
                name={Routes.Start}
                component={StartView}
                options={{
                  animationTypeForReplace: 'pop',
                }}
              />
              <Stack.Screen
                name={Routes.SignIn}
                component={SignInView}
                options={{
                  animationTypeForReplace: 'pop',
                }}
              />
            </>
          )}
          <Stack.Screen
            name={Routes.NoConnection}
            component={NoConnectionView}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
