import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ToastAndroid, Platform } from "react-native";
import { Color, Style } from "./src/tools";
import Button from "./src/components/Button";
import HttpService from "./src/service";

export default function App() {
  const httpSv = new HttpService();

  return (
    <View style={Style.container}>
      <Text style={{ color: Color.BLOOD_RED }}>Red Text</Text>
      <Button
        caption="Show Toast"
        color={Color.CARIBBEAN_GREEN}
        onPress={async () => {
          httpSv
            .get("auth/user", "0c3ba094-27c9-4da7-ac1a-192d387bae55")
            .then((res) => {
              if (Platform.OS == "android") {
                ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
              } else {
                alert(res.data.message);
              }
            })
            .catch((c) => {
              if (Platform.OS == "android") {
                ToastAndroid.show("User not Found", ToastAndroid.SHORT);
              } else {
                alert("User not Found");
              }
            })
            .then((c) => {});
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
