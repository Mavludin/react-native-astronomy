import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Routes {
  Start = 'Start',
  SignIn = 'SignIn',
  Home = 'Home',
  NoConnection = 'NoConnection',
}

export type RootStackParamList = {
  [Routes.Start]: undefined;
  [Routes.SignIn]: undefined;
  [Routes.Home]: undefined;
  [Routes.NoConnection]: undefined;
};

export const useAppNavigation =
  (): NativeStackNavigationProp<RootStackParamList> =>
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
