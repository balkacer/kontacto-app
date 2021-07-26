import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import Theme from "../theme/theme";
import Styles from "../tools/styles";

const Notification = ({ data }) => {
    const [isRead, setIsRead] = useState(data.isReaded)
    return (
        <TouchableOpacity onPress={() => setIsRead(!isRead) } style={[
            Styles.notification,
            {
                backgroundColor: isRead ? Theme.colorWhite : Theme.colorLightGray
            }
        ]}>
            <View style={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between',
                position: 'relative',
                top: -5
            }}>
                <Text style={{fontWeight: 'bold', color: Theme.colorPrimary}}>{data.sender}</Text>
                <Text style={{fontSize: 12, fontStyle: 'italic', color: isRead ? Theme.colorDisabledText : Theme.colorBlack}}>{data.timeAgo}</Text>
            </View>
            <Text style={{}}>{data.message}</Text>
        </TouchableOpacity>
    )
}

export default Notification;