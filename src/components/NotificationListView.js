import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Notification from './Notification';

const NotificationListView = ({ notifications }) => {

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <FlatList
                style={{paddingHorizontal: 10}}
                data={notifications}
                ListEmptyComponent={() => <Text>Not have notifications yet</Text>}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <Notification data={item} />
                    )
                }}
            />
        </View>
    )
}

export default NotificationListView;