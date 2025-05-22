import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { navigate } from "../../navigation/NavigationService";

export const Login = () => {
    return (
        <View>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => navigate("Home")}>
                <Text>Login btn</Text>
            </TouchableOpacity>
        </View>
    )
}