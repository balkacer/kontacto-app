import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { Icon } from 'react-native-elements';
import Theme from '../theme/theme';
import { Style } from "../tools";

const Tab = ({ icon, route, conectionPosition = 'up', onPress = (t) => t, isActive }) => {

    const borderRadius = useRef(new Animated.Value(0)).current;

    const onActiveTab = () => {

        borderRadius.setValue(0);

        Animated.timing(
            borderRadius,
            {
                toValue: 22,
                duration: 100,
                useNativeDriver: true
            }
        ).start(() => {
            Animated.timing(
                borderRadius,
                {
                    toValue: 18,
                    duration: 200,
                    useNativeDriver: true
                }).start()
        });

        onPress(route);
    }

    return (
        <View style={{ padding: 0, margin: 0 }}>
            <Animated.View
                style={{
                    zIndex: -2,
                    marginLeft: -25,
                    opacity: isActive ? 1 : 0,
                    backgroundColor: Theme.colorBackground,
                    width: Style.tab.width * 2,
                    height: Style.tabBar.height / 2,
                    position: 'absolute',
                    marginTop: conectionPosition === 'up'
                        ? - (Style.tabBar.height / 7)
                        : conectionPosition === 'down'
                            ? (Style.tabBar.height / 2.5)
                            : 0
                }}
            >
            </Animated.View>
            <Animated.View
                style={{
                    zIndex: -2,
                    borderTopLeftRadius: conectionPosition === 'up' ? borderRadius : 0,
                    borderBottomLeftRadius: conectionPosition === 'down' ? borderRadius : 0,
                    opacity: isActive ? 1 : 0,
                    backgroundColor: Theme.colorBlack,
                    width: Style.tab.width,
                    height: Style.tabBar.height,
                    position: 'absolute',
                    marginLeft: 50,
                    marginTop: conectionPosition === 'up' ? - (Style.tabBar.height / 8.8) : conectionPosition === 'down' ? - (Style.toolBar.height / 8.8) : 0
                }}
            >
            </Animated.View>
            <Animated.View
                style={{
                    zIndex: -2,
                    borderTopRightRadius: conectionPosition === 'up' ? borderRadius : 0,
                    borderBottomRightRadius: conectionPosition === 'down' ? borderRadius : 0,
                    opacity: isActive ? 1 : 0,
                    backgroundColor: Theme.colorBlack,
                    width: Style.tab.width,
                    height: Style.tabBar.height,
                    position: 'absolute',
                    marginLeft: -50,
                    marginTop: conectionPosition === 'up' ? - (Style.tabBar.height / 8.8) : conectionPosition === 'down' ? - (Style.toolBar.height / 8.8) : 0
                }}
            >
            </Animated.View>
            <TouchableOpacity
                onPress={() => onActiveTab()}
                style={[Style.tab, !isActive ? { backgroundColor: Theme.colorBlack } : {}]}
                activeOpacity={1}
            >
                <Icon name={icon} type='material-community' color={!isActive ? Theme.colorBackground : Theme.colorInputsPlaceholder} />
            </TouchableOpacity>
        </View>
    )
}

export default Tab;
