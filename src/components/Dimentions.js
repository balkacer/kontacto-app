import { Dimensions } from 'react-native'
import Constants from 'expo-constants'

const Dimentions = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    statusbarHeight: Constants.statusBarHeight
};

export default Dimentions;