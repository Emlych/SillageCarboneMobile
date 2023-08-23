import {  View, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Image} from "react-native";
import { COLORS, SIZE } from "../style";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.bgImageWrapper}>
        <Image source={require("../assets/background.png")} style={styles.bgImage} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Infos")}
            accessibilityLabel="Access to information on app"
            style={styles.roundButton}
          >
            <Ionicons
              name="information-circle"
              size={SIZE.iconSize}
              color={COLORS.darkBlue}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("User")}
            accessibilityLabel="Open user infos"
            style={styles.roundButton}
          >
            <FontAwesome5
              name="user-cog"
              size={SIZE.smallIconSize}
              color={COLORS.darkBlue}
            />
          </TouchableOpacity>
        </View>
      
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: COLORS.lightBlue,
  },
  bgImageWrapper: {
    position: "absolute",
    top: 50,
    bottom: 0,
    left: -155,
    width: windowWidth + 310,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    height: null,
    width: null,
    paddingHorizontal: -30,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  roundButton: {
    width: 58,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: COLORS.whiteBlue,
    borderRadius: 30,
    borderColor: COLORS.darkBlue,
  },
  title: {
    alignItems: "center",
    marginTop: (-windowHeight * 2) / 5,
  },
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.darkBlue,
  },
  primaryButton: {
    height: 60,
    backgroundColor: COLORS.whiteBlue,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginHorizontal: 60,
    marginBottom: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.darkBlue,
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default HomeScreen;
