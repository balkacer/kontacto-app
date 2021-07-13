import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Theme from '../theme/theme';
import { Style } from "../tools";

const Tab = ({ icon, route, conectionPosition = 'up', onPress = (t) => t, isActive }) => {
    return (
        <View style={{padding: 0, margin: 0}}>
            <View
                style={{
                    opacity: isActive ? 1 : 0, 
                    backgroundColor: Theme.colorBackground, 
                    width: Style.tab.width, 
                    height: Style.tabBar.height / 2, 
                    position: 'absolute', 
                    marginTop: conectionPosition === 'up'
                        ? - (Style.tabBar.height / 7)
                        : conectionPosition === 'down'
                            ? (Style.tabBar.height / 2.5)
                            : 0 
                }}
            >
            </View>
            <TouchableOpacity
                onPress={() => onPress(route)}
                style={[Style.tab,  !isActive ? { backgroundColor: Theme.colorBlack } : {}]}
                activeOpacity={1}
            >
                <Icon name={icon} type='material-community' color={!isActive ? Theme.colorBackground : Theme.colorInputsPlaceholder} />
            </TouchableOpacity>
        </View>
    )
}

export default Tab;
