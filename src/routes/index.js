import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Home, SignUp } from '../screens';

const options = {
  headerShown: false
}

const screens = {
  SignUp: {
    screen: SignUp,
  },
  Home: {
    screen: Home,
  }  
};

const Navigator = createStackNavigator(screens, { defaultNavigationOptions: options });

export default createAppContainer(Navigator);
