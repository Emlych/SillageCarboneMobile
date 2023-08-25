import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import CustomInput from "./Input";

// Component Signin
const SigninForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	// TODO: implement login behaviour
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

				<CustomInput
					icon="lock"
					value={confirmPassword}
					placeholder="Confirmer le mot de passe"
					callback={setConfirmPassword}
				/>
			</View>

			{/* Custom button component to submit login form */}
			<Button text="S'inscrire" callback={submitLogin} />
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

export default SigninForm;
