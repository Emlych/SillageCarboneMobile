import {
	Text,
	View,
	StyleSheet,
	SafeAreaView,
	Modal,
	TouchableOpacity,
	Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../style";
import { useNavigation } from "@react-navigation/native";

const ScanModal = ({ product, modalVisible, setModalVisible, setScanned }) => {
	const navigation = useNavigation();

	// -- Close modal and enable scan
	const handleGoBack = () => {
		setModalVisible(false);
		setScanned(false);
	};

	return (
		<Modal transparent={true} visible={modalVisible} animationType="slide">
			<SafeAreaView style={styles.modalContainer}>
				<View style={styles.crossContain}>
					<Entypo
						style={styles.cross}
						name="cross"
						size={30}
						color="grey"
						onPress={handleGoBack}
					/>
				</View>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Product", { product: product });
						setModalVisible(false);
					}}
				>
					{/* Rajouter lien vers page Product à créer (si besoin) */}
					<View style={styles.modal}>
						<View style={styles.modalContent}>
							<View style={styles.imgContainer}>
								{product.url_image && (
									<Image
										source={{ uri: product.url_image }}
										style={styles.productPicture}
										resizeMode="contain"
									/>
								)}
							</View>
							<View style={styles.fiche}>
								<View style={styles.marginDiv}></View>

								{/* Product name and brand */}
								<View>
									<Text numberOfLines={1} style={styles.productName}>
										{product.name}
									</Text>
									<Text style={styles.productBrand}>{product.brand}</Text>
								</View>
							</View>
						</View>

						{/* Empreinte carbone */}
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
					</View>
				</TouchableOpacity>
			</SafeAreaView>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		justifyContent: "space-evenly",
		alignItems: "center",
		backgroundColor: "white",
		position: "absolute",
		bottom: 0,
		flexDirection: "row",
		height: "40%",
		borderRadius: 20,
		width: "100%",
	},
	modal: {
		marginLeft: 10,
		marginRight: 10,
		marginTop: 20,
		borderBottomWidth: 1,
		borderBottomColor: "lightgrey",
		marginBottom: 2,
		padding: 5,
		height: "90%",
	},
	modalContent: { flexDirection: "row", alignItems: "flex-start" },
	crossContain: {
		position: "absolute",
		justifyContent: "flex-end",
		right: 5,
		top: 5,
	},
	cross: { justifyContent: "center" },
	imgContainer: { justifyContent: "center" },
	productPicture: {
		height: 90,
		width: 90,
	},
	fiche: { flexDirection: "row", width: "60%" },
	marginDiv: { width: 15 },
	productName: { color: "dimgray", fontWeight: "bold", fontSize: 20 },
	productBrand: { fontWeight: "700", color: "darkgrey" },
	resultContainer: {
		backgroundColor: COLORS.whiteBlue,
		paddingVertical: 15,
		paddingHorizontal: 10,
		borderRadius: 15,
		marginVertical: 5,
	},
	results: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "space-between",
		paddingVertical: 5,
	},
	result: { fontWeight: "bold", fontSize: 18 },
});

export default ScanModal;
