import React, { useState } from "react"
import { Text, View } from "react-native"
import { Style } from "../tools";
import Tab from './Tab';

const ToolBar = ({ appTitle, tabs = null, onTabChange = (t) => t }) => {
    const [ activeTab, setActiveTab ] = useState(null);

    const tabList = [];
    
    const activateTab = (r) => {
        setActiveTab(r);
        onTabChange(r);
    };

    if (tabs)
    {
        tabs.forEach(tab => {
            tabList.push(
                <Tab
                    isActive={activeTab == tab.route}
                    key={tab.icon}
                    icon={tab.icon}
                    route={tab.route}
                    conectionPosition='down'
                    onPress={value => activateTab(activeTab != tab.route ? value : null )}
                />);
        });
    }    

    return (
        <View style={Style.toolBar}>
            <Text style={{color: '#FFF', fontSize: 24}}>{appTitle}</Text>
            {tabs != null && <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: (Style.tab.width * 2) + 15}}>{tabList}</View>}
        </View>
    )
}

export default ToolBar;