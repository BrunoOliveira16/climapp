import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import citiesData from "../data/cities.json";

const Cities = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState(citiesData);

  useEffect(() => {
    const newFilteredCities = citiesData.filter((city) =>
      city.city.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    setFilteredCities(newFilteredCities);
  }, [search]);

  return (
    <LinearGradient colors={["#00457d", "#05051f"]} style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Digite a cidade"
          placeholderTextColor={"#fff"}
          style={style.input}
          value={search}
          onChangeText={(value) => setSearch(value)}
        />
        <MaterialIcons name="search" size={18} color="#fff" />
      </View>

      <ScrollView>
        <View style={style.scrollList}>
          {filteredCities.map((item) => (
            <TouchableOpacity
              key={item.city}
              style={style.listItem}
              onPress={() => {
                router.push(`/${item.city}`);
              }}
            >
              <Image
                style={style.cityImage}
                source={require("../assets/images/clouds.png")}
              />
              <Text style={style.cityName}>
                {item.city.replace(",", " - ")}
              </Text>
              <Text style={style.cityTemp}>{item.temp}º</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
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
  inputContainer: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  input: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
  },
});

export default Cities;
