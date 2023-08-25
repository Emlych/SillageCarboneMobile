import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../style";

// Product component to display picture, name, brand, carbon footprint and travel distance
const Product = ({ route }) => {
	const { product } = route.params;
	return (
		<SafeAreaView style={styles.safeareaContainer}>
			<View style={styles.headerContainer}>
				<Image source={require(`${product.picture}`)} style={styles.productPicutre} />
				<View style={styles.headerTitle}>
					<Text>{product.name}</Text>
					<Text>{product.brand}</Text>
					<View style={styles.resultContainer}>
						<Text>Empreinte carbone : {product.empreinteCarbone} g CO2/kg</Text>
						<Text>Distance: {product.distance} km</Text>
					</View>
				</View>
			</View>
			<View>{product.name}</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeareaContainer: { backgroundColor: COLORS.lightBlue },
	headerContainer: { flexDirection: "row" },
	headerTitle: {},
	resultContainer: { backgroundColor: COLORS.whiteBlue },
});

export default Product;
