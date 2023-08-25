import { Text, View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import products from "../assets/results.json";
import { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner"; // access to camera scan
import ScanModal from "../components/ScanModal";

// -- Screen dimensions
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ScanScreen = ({ navigation }) => {
	//- States for scanned product, isScanned, is modal opened?
	const [product, setProduct] = useState();
	const [scanned, setScanned] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	//-- States for permission acess to camera + code bar scanned or not
	const [hasPermission, setHasPermission] = useState(null);

	// -- Ask for permission each time you open the camera screen
	useEffect(() => {
		const getPermission = async () => {
			try {
				const { status } = await BarCodeScanner.requestPermissionsAsync();
				setHasPermission(status === "granted");
			} catch (error) {
				console.error("Error while requesting camera permission:", error);
				// Access refused
				setHasPermission(false);
			}
		};
		getPermission();
	}, []);

	// -- Retrieve the product with code bar
	const getProductFromBarCode = (barcode) => {
		let productFound = false;
		for (const product of products) {
			if (product.bar_code === +barcode) {
				setProduct(product);
				productFound = true;
				break;
			}
		}

		if (!productFound) navigation.navigate("Error");
	};

	//- Read code bar
	const handleScannedCodeBar = ({ data }) => {
		getProductFromBarCode(data);
		setScanned(true);
		setModalVisible(true);
	};

	//----------------------------------------------------
	//- Display acces denial
	if (hasPermission === null)
		return (
			<SafeAreaView style={styles.container}>
				<Text>Requesting for camera permission</Text>
			</SafeAreaView>
		);
	if (hasPermission === false)
		<SafeAreaView style={styles.container}>
			<Text>No access for camera</Text>
			<Button title={"Allow camera"} onPress={() => getPermission()}></Button>
		</SafeAreaView>;

	return (
		<SafeAreaView style={styles.safeareaContainer}>
			<View style={styles.scanScreen}>
				<BarCodeScanner
					onBarCodeScanned={scanned ? undefined : handleScannedCodeBar}
					style={{ height: height, width: width }}
				/>
				{scanned && product && (
					<ScanModal
						product={product}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						setScanned={setScanned}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeareaContainer: { flex: 1 },
	scanScreen: { height: "90%", width: width, justifyContent: "center" },
});

export default ScanScreen;
