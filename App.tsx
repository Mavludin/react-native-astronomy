import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StartView} from './screens/Start/StartView';
import {SignInView} from './screens/SignIn/SignInView';
import {RootStackParamList, Routes} from './models/navigation';
import {HomeView} from './screens/Home/HomeView';
import {Provider} from 'react-redux';
import {store} from './store';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={Routes.Start}>
          <Stack.Screen name={Routes.Start} component={StartView} />
          <Stack.Screen name={Routes.SignIn} component={SignInView} />
          <Stack.Screen name={Routes.Home} component={HomeView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
