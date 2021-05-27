import React from "react";
import { View, Text, ToastAndroid, Platform } from "react-native";
import { Color, Style } from "../tools";
import Button from "../components/Button";
import HttpService from "../service";

const Alerts = {
  android: (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  },
  web: (msg) => {
    alert(msg);
  },
};

const httpSv = new HttpService();

const getData = async () => {
  httpSv
    .get("user", "f83a2d6b-055a-4cdd-84e1-14ca6f2ee279")
    .then((res) => {
      console.log(res.data.message);
      Alerts[Platform.OS](res.data.message);
    })
    .catch(() => {
      console.log("User Not Found!");
      Alerts[Platform.OS]("User Not Found!");
    });
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={Style.container}>
      <Button
        caption="Lista de productos"
        color={Color.INPUT_ONE}
        onPress={() => navigation.navigate("Products")}
      />
      <Button
        caption="Show Toast"
        color={Color.CARIBBEAN_GREEN}
        onPress={getData}
      />
    </View>
  );
}
