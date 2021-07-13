import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Home, SignUp } from '../screens';
import { Platform } from 'react-native';

const options = {
  headerShown: false
}

const screens = {
  Home: {
    screen: Platform.OS == 'android' ? Home : Home,
  },
  SignUp: {
    screen: Platform.OS == 'android' ? SignUp : SignUp,
  }   
};

const Navigator = createStackNavigator(screens, { defaultNavigationOptions: options });

export default createAppContainer(Navigator);
