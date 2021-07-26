import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Home, SignUp } from '../screens';
import { Platform } from 'react-native';
import ContactProfile from '../screens/ContactProfile';

const options = {
  headerShown: false
}

const screens = {
  Home: {
    screen: Home,
  },
  SignUp: {
    screen: SignUp,
  },
  Contacts: {
    screen: ContactProfile
  }
};

const Navigator = createStackNavigator(screens, { defaultNavigationOptions: options });

export default createAppContainer(Navigator);
