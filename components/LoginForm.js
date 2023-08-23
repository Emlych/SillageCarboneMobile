import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../components/Button";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { COLORS, SIZE } from "../style";
import CustomInput from "./Input";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitLogin = () => {
		console.log("Email:", email);
		console.log("Password:", password);
	};

	return (
		<View style={styles.container}>
			<View style={styles.formContainer}>
				<CustomInput
					icon="user"
					value={email}
					placeholder="Adresse mail"
					callback={setEmail}
				/>

				<CustomInput
					icon="lock"
					value={password}
					placeholder="Mot de passe"
					callback={setPassword}
				/>
			</View>

			{/* Custom button component to submit login form */}
			<Button text="Se connecter" callback={submitLogin} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 20,
	},
	formContainer: {
		marginBottom: 50,
	},
});

export default LoginForm;
