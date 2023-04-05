import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeView} from './screens/Home/HomeView';
import {SignInView} from './screens/SignIn/SignInView';
import {RootStackParamList} from './models/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="SignIn" component={SignInView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
