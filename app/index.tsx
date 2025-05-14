import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
      <Image source={require("../assets/images/logo.png")} />
      <Image source={require("../assets/images/weather.png")} />

      <Text style={style.title}>Boas-vindas!</Text>
      
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonTitle}>Entrar</Text>
        <MaterialIcon name="arrow-forward" size={24} color={"#01080E"} />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 64,
    paddingVertical: 79,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    color: "#fff",
  },
  button: {
    width: "100%",
    height: 40,
    gap: 8,
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7693FF",
  },
  buttonTitle: {
    color: "#01080E",
    fontSize: 20,
    fontWeight: "600",
  },
});
