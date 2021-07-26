import React from "react";
import { Text, View } from "react-native";

const ContactProfile = (props) => {
    const [ contact ] = props.route.params;
    const contactFullName = JSON.stringify(contact.name) + ' ' + JSON.stringify(contact.lastName) 
    return (
        <View>
            <Text>{`Hola desde el Contact Profile de ${contactFullName}`}</Text>
        </View>
    )
}

export default ContactProfile;