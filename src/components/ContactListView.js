import React, { useState } from 'react';
import { View, Text, FlatList, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native';
import { Style } from '../tools';
import ContactCard from './ContactCard';
import Dimentions from './Dimentions';

const ContactListView = ({ items, viewType = 'list', hasSearchBar = false, onSelectOne = (c) => c }) => {
    const [contactList, setContactList] = useState(items);

    // const showToast = (contactId = 0) => {
    //     const msj = `The selected contact is ${contactId}`;
    //     ToastAndroid.show(msj, ToastAndroid.SHORT);
    // }

    return (
        <View style={{ width: '100%', height: '100%' }}>
            {hasSearchBar &&
                <TextInput
                    style={[Style.input, { marginBottom: 10, marginHorizontal: 10 }]}
                    placeholder='Search a contact'
                    onChangeText={(search) => {
                        if (search !== '') {
                            setContactList(items.filter(c => `${c.name} ${c.lastName}`.includes(search)));
                        } else {
                            setContactList(items);
                        }
                    }}
                />
            }
            <FlatList
                style={{paddingHorizontal: 10}}
                data={contactList}
                ListEmptyComponent={() => <Text>No items</Text>}
                columnWrapperStyle={viewType !== 'list' ? {
                    justifyContent: 'space-between'
                } : null }
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ContactCard onPress={(id) => onSelectOne(id)} contact={item} parentWidth={Dimentions.screenWidth - 20} viewType={viewType} />
                    )
                }}
                numColumns={viewType !== 'list' ? 2 : 1}
            />
        </View>
    )
}

export default ContactListView;