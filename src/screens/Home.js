import React, { Component } from 'react';
import { View } from 'react-native';
import { Style } from '../tools';
import HttpService from '../service';
import ToolBar from '../components/ToolBar';
import TabBar from '../components/TabBar';
import Dimentions from '../components/Dimentions';
import ContactListView from '../components/ContactListView';
import NotificationListView from '../components/NotificationListView';

export default class HomeScreen extends Component {
  screenHNormal = Dimentions.screenHeight - (Style.tabBar.height + Style.toolBar.height);
  screenHToolbar = this.screenHNormal + Style.toolBar.height;

  state = {
    activeTab: 'home',
    activeToolbar: null,
    screenHeight: this.screenHNormal,
    selectedContact: null
  }

  contacts = [
    {
      id: 1,
      name: 'Dariela',
      lastName: 'Rosario',
      isFavorite: true,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 2,
      name: 'Juan',
      lastName: 'Perez',
      isFavorite: false,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 3,
      name: 'José',
      lastName: 'Guillermo',
      isFavorite: false,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 4,
      name: 'Jose',
      lastName: 'Perez',
      isFavorite: false,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 5,
      name: 'Mario',
      lastName: 'Gomez',
      isFavorite: true,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 6,
      name: 'Jose',
      lastName: 'Perez',
      isFavorite: false,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 7,
      name: 'Enmanuel',
      lastName: 'Balcacer',
      isFavorite: true,
      image: null
    },
    {
      id: 8,
      name: 'Jose',
      lastName: 'Perez',
      isFavorite: false,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 9,
      name: 'Jose',
      lastName: 'Perez',
      isFavorite: false,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 10,
      name: 'Andy',
      lastName: 'Joel',
      isFavorite: false,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 11,
      name: 'Jose',
      lastName: 'Perez',
      isFavorite: false,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 12,
      name: 'Jose',
      lastName: 'Perez',
      isFavorite: false,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 13,
      name: 'Jose',
      lastName: 'Perez',
      isFavorite: false,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 14,
      name: 'Jose',
      lastName: 'Perez',
      isFavorite: false,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    },
    {
      id: 15,
      name: 'Jose',
      lastName: 'Perez',
      isFavorite: false,
      image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
    }
  ]

  notifications = [
    {
      id: 1,
      sender: 'Andy Royers',
      message: 'Te ha enviado una solicitud de contacto',
      action: null,
      isReaded: false,
      timeAgo: 'just now'
    },
    {
      id: 2,
      sender: 'Felipe Ramon',
      message: 'Ha compartido tu contacto',
      action: null,
      isReaded: true,
      timeAgo: '3 hours ago'
    },
    {
      id: 3,
      sender: 'Maria Guadalupe',
      message: 'Te ha compartido un contacto',
      action: null,
      isReaded: false,
      timeAgo: 'Yesterday'
    },
    {
      id: 4,
      sender: 'Alex Pere',
      message: 'Está de cumpleaños',
      action: null,
      isReaded: false,
      timeAgo: '2021/07/20'
    }
  ]

  constructor() {
    super();
  }

  httpSv = new HttpService();

  render() {
    return (
      <View style={{ marginTop: Dimentions.statusbarHeight }}>
        <ToolBar
          onTabActive={(tab) => {
            this.setState({ activeToolbar: tab, screenHeight: tab ? this.screenHToolbar : this.screenHNormal })
          }}
          appTitle={this.state.activeToolbar ? this.state.activeToolbar : 'Kontacto'}
          tabs={[
            { icon: 'search', route: 'Search' },
            { icon: 'notifications', route: 'Notifications' },
            { icon: 'settings', route: 'Settings' }
          ]} />
        <View
          style={[Style.screen, { minHeight: this.state.screenHeight, maxHeight: this.state.screenHeight, paddingVertical: 10 }]}>
        {!this.state.activeToolbar && this.state.activeTab === 'home' &&
          <ContactListView onSelectOne={(id) => this.props.navigation.navigate('ContactProfile',{contact: this.contacts.filter(c => c.id === id)})} items={this.contacts} viewType='list' hasSearchBar={true} />}
        {!this.state.activeToolbar && this.state.activeTab === 'favorites' &&
          <ContactListView onSelectOne={(id) => this.props.navigation.navigate('ContactProfile',{contact: this.contacts.filter(c => c.id === id)})} items={this.contacts.filter(c => c.isFavorite )} viewType='list' hasSearchBar={true} />}
        {!this.state.activeToolbar && this.state.activeTab === 'contacts' &&
          <ContactListView onSelectOne={(id) => this.props.navigation.navigate('ContactProfile',{contact: this.contacts.filter(c => c.id === id)})} items={this.contacts} viewType='grid' hasSearchBar={true} />}
        {this.state.activeToolbar && this.state.activeToolbar === 'Search' &&
          <ContactListView onSelectOne={(id) => this.props.navigation.navigate('ContactProfile',{contact: this.contacts.filter(c => c.id === id)})} items={this.contacts} viewType='grid' hasSearchBar={true} />}
        {this.state.activeToolbar && this.state.activeToolbar === 'Notifications' &&
          <NotificationListView notifications={this.notifications} />}
        </View>
        {!this.state.activeToolbar &&
          <TabBar
          defaultTab={this.state.activeTab}
          onTabChange={(tab) => this.setState({ activeTab: tab })}
          tabs={[
            { icon: 'star', route: 'favorites' },
            { icon: 'home', route: 'home' },
            { icon: 'person', route: 'contacts' }
          ]} />
        }
      </View>
    );
  }
}
