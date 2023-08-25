import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../style";

// Screen to display all informations on a product
const Product = ({ route }) => {
	const { product } = route.params;
	return (
		<SafeAreaView style={styles.safeareaContainer}>
			<ScrollView>
				<View style={styles.headerContainer}>
					<View style={styles.imageBackground}>
						<Image source={{ uri: product.url_image }} style={styles.productPicutre} />
					</View>

					<View style={styles.headerTitle}>
						<Text style={styles.productName}>{product.name}</Text>
						<Text style={styles.productName}>{product.subname}</Text>
						<Text style={styles.brandName}>{product.brand}</Text>
					</View>
				</View>

				<View style={styles.resultContainer}>
					<View style={styles.results}>
						<Text>Empreinte carbone : </Text>
						<Text style={styles.result}>{product.co2_per_kg} g CO2/kg</Text>
					</View>

					<View style={styles.results}>
						<Text>Distance : </Text>
						<Text style={styles.result}>{product.distance} km</Text>
					</View>
				</View>

				<View>
					<Text style={styles.descriptionTitle}>Détails du trajet</Text>
					<Text>Port de départ: {product.depart} </Text>
					<Text>Port d'arrivée: {product.arrivée} </Text>
					<Text>Type de carburant: {product.oil} </Text>
					<Text>Type de bateau: {product.vessel_type} </Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeareaContainer: {
		backgroundColor: COLORS.lightBlue,
		paddingHorizontal: 20,
		flex: 1,
		paddingVertical: 30,
	},
	headerContainer: { flexDirection: "row" },
	productPicutre: { width: 90, height: 130, resizeMode: "cover" },
	imageBackground: {
		width: 100,
		height: 135,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
	},
	headerTitle: { marginLeft: 20, justifyContent: "space-around" },
	productNameContainer: { flexDirection: "row" },
	productName: { fontSize: 22, fontWeight: "bold", color: COLORS.darkBlue },
	brandName: { fontSize: 18, color: COLORS.whiteBlue, fontWeight: "bold" },
	resultContainer: {
		backgroundColor: COLORS.whiteBlue,
		paddingVertical: 15,
		paddingHorizontal: 10,
		borderRadius: 15,
		marginVertical: 20,
	},
	results: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "space-between",
		paddingVertical: 5,
	},
	result: { fontWeight: "bold", fontSize: 18 },
	descriptionTitle: { fontWeight: "bold", paddingBottom: 10, fontSize: 18 },
	precision: {
		marginTop: 50,
		backgroundColor: COLORS.darkBlue,
		padding: 10,
		borderRadius: 15,
	},
	textPrecision: { color: COLORS.whiteBlue, fontWeight: "bold", fontSize: 15 },
});

export default Product;
