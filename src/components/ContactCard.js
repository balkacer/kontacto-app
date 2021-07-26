import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import Theme from "../theme/theme";
import Styles from "../tools/styles";
const ContactCard = ({ contact, viewType = 'list', parentWidth = null, onPress = (id) => id }) => {
    const contactName = `${contact.name} ${contact.lastName}`;
    const viewTypeIsList = viewType === 'list';

    return (
        <TouchableOpacity onPress={() => onPress(contact.id)} style={[
            {
                width: parentWidth ? parentWidth / 2 - 5 : 'auto',
                paddingTop: 5,
                paddingBottom: !viewTypeIsList ? 10 : 5,
                marginVertical: 5,
                backgroundColor: Theme.colorInputsPlaceholder,
            }, 
            !viewTypeIsList ? Styles.contactCardGrid : Styles.contactCardList
        ]}>
            <Image
                resizeMode='cover'
                style={{
                    borderRadius: 10,
                    minWidth: !viewTypeIsList && parentWidth ? parentWidth / 2 - 15 : 60,
                    minHeight: !viewTypeIsList && parentWidth ? parentWidth / 2 - 15 : 60,
                    borderColor: Theme.colorBackground,
                    borderWidth: !viewTypeIsList ? 0 : 2,
                    backgroundColor: Theme.colorWhite,
                    marginRight: !viewTypeIsList ? 0 : 10,
                    marginBottom: !viewTypeIsList ? 8 : 0
                }}
                source={{
                    uri: contact.image
                }}
                width={!viewTypeIsList && parentWidth ? parentWidth / 2 - 15 : 60}
                height={!viewTypeIsList && parentWidth ? parentWidth / 2 - 15 : 60} />
            <Text style={{ color: Theme.colorWhite, fontSize: 18 }}>{contactName}</Text>
        </TouchableOpacity>
    )
}

export default ContactCard;