import React, { useState } from "react"
import { View } from "react-native"
import { Style } from "../tools";
import Tab from './Tab';

const TabBar = ({ tabs, onTabChange = (t) => t, defaultTab }) => {
    const [ activeTab, setActiveTab ] = useState(defaultTab);
    const tabList = [];
    
    const activateTab = (r) => {
        setActiveTab(r);
        onTabChange(r);
    };

    tabs.forEach(tab => {
        tabList.push(
            <Tab
                isActive={activeTab == tab.route}
                key={tab.icon}
                icon={tab.icon}
                route={tab.route}
                onPress={value => activateTab(value)}
            />
        );
    });

    return (
        <View style={Style.tabBar}>
            {tabList}            
        </View>
    )
}


export default TabBar;