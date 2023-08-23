import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	Dimensions,
	Image,
	ScrollView,
} from "react-native";
import { COLORS, SIZE } from "../style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const article =
	"Le projet Sillage Carbone s'intègre dans le contexte du transport maritime et son impact sur l'environnement. En 2020, le transport maritime représente près de 100000 navires transportant 10 milliards de tonnes de marchandises pour un marché total de 2000 milliards d'euros. Ainsi, le transport maritime assure 90% des volumes transportés du commerce mondial, ce qui peut se traduire par 9 biens de consommation sur 10 qui passent à un moment sur l'eau avant d'arriver à son lieu d'achat. ";

const InfoScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.safearea}>
			{/* Block with title and background image of boat */}
			<View style={styles.bgImageWrapper}>
				<Image source={require("../assets/background.png")} style={styles.bgImage} />
				<View style={styles.titleContainer}>
					<Text style={styles.title}>A propos de Sillage Carbone</Text>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate("Home")}
					accessibilityLabel="Go back to home screen"
					style={styles.roundButton}
				>
					<MaterialCommunityIcons
						name="lighthouse"
						size={SIZE.iconSize}
						color={COLORS.darkBlue}
					/>
				</TouchableOpacity>
			</View>

			{/* Block with article */}
			<ScrollView>
				<View style={styles.articleContainer}>
					<Text style={styles.projectDetail}>{article}</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	safearea: { backgroundColor: COLORS.lightBlue, flex: 1 },
	bgImageWrapper: {
		position: "relative",
		top: 0,
		bottom: 0,
		width: windowWidth,
		height: windowHeight * 0.4, // Set the height to 30% of the screen height
	},
	bgImage: {
		flex: 1,
		resizeMode: "cover",
		height: null,
		width: null,
		transform: [{ rotate: "180deg" }, { scale: 2 }, { translateY: -40 }],
	},
	titleContainer: {
		position: "absolute", // Use absolute positioning for title
		top: -60, // Position title at -45 top of the wrapper
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 55,
		paddingRight: 55,
	},
	articleContainer: {
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 70,
		paddingLeft: 40,
		paddingRight: 40,
	},
	title: {
		fontWeight: "600",
		fontSize: 40,
		textAlign: "center",
		color: "white",
		lineHeight: 40,
	},
	projectDetail: {
		fontSize: 18,
		backgroundColor: "rgba(52, 52, 52, 0.2)",
		padding: 15,
	},
	roundButton: {
		position: "absolute", // Use absolute positioning for the roundButton
		top: 5, // Position the roundButton at the top of the screen
		left: 15, // Position the roundButton at the left of the screen
		width: 50,
		height: 48,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		backgroundColor: COLORS.whiteBlue,
		borderRadius: 30,
		borderColor: COLORS.darkBlue,
	},
});

export default InfoScreen;
