import { StyleSheet } from "react-native";
import Theme from "../theme/theme";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: Theme.colorLight,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 0,
  },
  btn: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Styles;
