import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const CityDetails = () => {
    const searchParams = useLocalSearchParams()
    console.log(searchParams)
    return <View />
};

export default CityDetails;