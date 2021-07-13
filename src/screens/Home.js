import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Style } from '../tools';
import HttpService from '../service';
import ToolBar from '../components/ToolBar';
import TabBar from '../components/TabBar';
import Dimentions from '../components/Dimentions';

export default class HomeScreen extends Component {
  state = {
    activeTab: 'home'
  }

  screenHeight = Dimentions.screenHeight - ( Style.tabBar.height + Style.toolBar.height );

  httpSv = new HttpService();

  render () {
    return (
    <View style={{ marginTop: Dimentions.statusbarHeight }}>
      <ToolBar appTitle='Kontacto' tabs={[ {icon: 'bell', route: 'notifications'},  {icon: 'cog', route: 'settings'} ]}>
      </ToolBar>
      <View style={[Style.screen, { minHeight: this.screenHeight, maxHeight: this.screenHeight }]}>
        <Text style={{fontSize: 18}}>{this.state.activeTab}</Text>
      </View>
      <TabBar
        tabs={[ {icon: 'star', route: 'favorites'},  {icon: 'home', route: 'home'},  {icon: 'account', route: 'contacts'} ]}
        defaultTab='home'
        onTabChange={(tab) => this.setState({ activeTab: tab})} />
    </View>      
    );
  }
}

