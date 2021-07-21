import React from "react";
import { View, Text, Image } from "react-native";
import Theme from "../theme/theme";
import Styles from "../tools/styles";
const ContactCard = ({contact}) => {
    return (
        <View style={Styles.contactCard}>
            <Image style={{borderRadius: 8, borderColor: Theme.colorBackground, borderWidth: 2, backgroundColor: Theme.colorWhite, marginRight: 10}} source={{uri: contact.image}} width={50} height={50} />
            <Text style={{color: Theme.colorWhite, fontSize: 18}}>{`${contact.name} ${contact.lastName}`}</Text>
        </View>
    )
}

export default ContactCard;