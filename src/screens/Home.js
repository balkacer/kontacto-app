import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Style } from '../tools';
import HttpService from '../service';
import ToolBar from '../components/ToolBar';
import TabBar from '../components/TabBar';
import TabScreen from '../components/TabScreen';
import Dimentions from '../components/Dimentions';
import ContactCard from '../components/ContactCard';
import { ScrollView } from 'react-native';

export default class HomeScreen extends Component {
  state = {
    activeTab: 'home'
  }

  contacts = [
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Juan',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: null
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      name: 'Jose',
      lastName: 'Perez',
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    }
  ]

  getContacts(){
    const contactList = [];
    for (let i = 0; i < this.contacts.length; i++) {
      contactList.push(
        <ContactCard key={i} contact={this.contacts[i]} />
      )
    }
    return contactList
  }

  screenHeight = Dimentions.screenHeight - (Style.tabBar.height + Style.toolBar.height);

  httpSv = new HttpService();

  render() {
    return (
      <View style={{ marginTop: Dimentions.statusbarHeight }}>
        <ToolBar appTitle='Kontacto' tabs={[{ icon: 'bell', route: 'notifications' }, { icon: 'cog', route: 'settings' }]} />
        <View style={[Style.screen, { minHeight: this.screenHeight, maxHeight: this.screenHeight, padding: 10}]}>
          <ScrollView vertical style={{width: '100%'}}>
            {this.getContacts()}
          </ScrollView>
        </View>
        <TabBar
          tabs={[{ icon: 'star', route: 'favorites' }, { icon: 'home', route: 'home' }, { icon: 'account', route: 'contacts' }]}
          defaultTab='home'
          onTabChange={(tab) => this.setState({ activeTab: tab })} />
      </View>
    );
  }
}
