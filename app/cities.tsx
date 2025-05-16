import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import citiesData from "../data/cities.json";

const Cities = () => {
  return (
    <LinearGradient colors={["#00457d", "#05051f"]} style={style.container}>
      <ScrollView>
        <View style={style.scrollList}>
          {citiesData.map((city) => (
            <View key={city.cid} style={style.listItem}>
              <Image
                style={style.cityImage}
                source={require("../assets/images/clouds.png")}
              />
              <Text style={style.cityName}>{city.city}</Text>
              <Text style={style.cityTemp}>{city.temp}º</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
  },
  scrollList: {
    gap: 16,
  },
  cityName: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
  },
  listItem: {
    height: 63,
    width: "100%",
    borderRadius: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255, 0.15)",
  },
  cityTemp: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "Montserrat_700Bold",
  },
  cityImage: {
    width: 27,
    height: 24,
  },
});

export default Cities;
