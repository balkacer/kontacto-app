import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Color, Style } from "../tools";

const ButtonComponent = ({
  caption = "Unnamed",
  onPress = () => console.log("hello"),
  color = Color.ABSOLUTE_WHITE,
}) => {
  return (
    <View style={{ margin: 2 }}>
      <TouchableOpacity
        style={[Style.btn, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text
          style={{
            fontSize: 24,
            color:
              color == Color.ABSOLUTE_BLACK
                ? Color.ABSOLUTE_WHITE
                : Color.ABSOLUTE_BLACK,
          }}
        >
          {caption}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ButtonComponent;
