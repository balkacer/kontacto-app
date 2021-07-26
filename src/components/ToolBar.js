import React, { useState } from "react"
import { Text, View } from "react-native"
import Theme from "../theme/theme";
import { Style } from "../tools";
import Tab from './Tab';

const ToolBar = ({ appTitle, tabs = null, onTabActive = (t) => t }) => {
    const [ activeTab, setActiveTab ] = useState(null);

    const tabList = [];
    
    const activateTab = (r) => {
        setActiveTab(r);
        onTabActive(r);
    };

    if (tabs)
    {
        tabs.forEach(tab => {
            tabList.push(
                <Tab
                    isActive={activeTab == tab.route}
                    key={tab.route}
                    icon={tab.icon}
                    route={tab.route}
                    conectionPosition='down'
                    onPress={value => activateTab(activeTab != tab.route ? value : null )}
                />);
        });
    }    

    return (
        <View style={Style.toolBar}>
            <Text style={{color: Theme.colorWhite, fontSize: 24}}>{appTitle}</Text>
            {tabs != null && <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: (Style.tab.width * tabs.length) + 15}}>{tabList}</View>}
        </View>
    )
}

export default ToolBar;