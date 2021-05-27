import * as React from "react";
import { Style } from "./src/tools";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Image } from "react-native";
import Button from "./src/components/Button";
import HomeScreen from "./src/screens/Home";

function DetailsScreen({ route }) {
  const { product } = route.params;
  return (
    <View style={Style.container}>
      <Text>
        El index del producto {product.product} es: {product.index}
      </Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri: "https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw",
      }}
    />
  );
}

const Products = ["papa", "melon", "yuca", "sandia", "coco"];

function ProductsScreen({ navigation }) {
  return (
    <View style={Style.container}>
      {/* <LogoTitle /> */}
      <Button
        caption="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
      {Products.map((product, index) => {
        return (
          <Button
            key={index}
            caption={`Ir a ${product}`}
            onPress={() =>
              navigation.navigate("Details", {
                product: { index, product },
              })
            }
          />
        );
      })}
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f45",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "normal",
          },
        }}
      >
        {/* <Stack.Screen
          options={{ title: "Inicio" }}
          name="Home"
          component={HomeScreen}
        /> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({
            title: `Detalles de ${route.params.product.product}`,
          })}
        />
        <Stack.Screen
          options={{ title: "Lista de productos" }}
          name="Products"
          component={ProductsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
