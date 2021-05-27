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
    .get("user", "ef852034-0a01-4d4e-a55c-607a61e68c86")
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
