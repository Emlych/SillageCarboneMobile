import {View, Text, Image, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../style";

const ErrorScreen = () => {
    return (
        <SafeAreaView style={styles.safeareaContainer}>
            <View>
                <Image style={styles.photo} source={{uri: "https://cdn.discordapp.com/attachments/1032581874800922674/1048905975588990986/IMG_0029.jpg"}}/>
                <Text style={styles.legend}>Oups le bateau n'est pas encore arrivé !</Text>  
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  safeareaContainer: { backgroundColor: COLORS.lightBlue, flex: 1, justifyContent: "center", alignItems: "center" },
  photo: {width: 300, height: 220, resizeMode: "cover"},
  legend: {textAlign: "center", paddingTop: 20, fontWeight: "bold", fontSize: 22}
})

export default ErrorScreen;