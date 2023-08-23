import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Dimensions,
  } from "react-native";
  import { COLORS } from "../style";
  
  const windowHeight = Dimensions.get("window").height;
  
  const UserScreen = () => {
    return (
      <SafeAreaView style={styles.background}>
        <View>
          <Text>User screen : format free or premium</Text>
          <Text>Swipe right to get back to home screen</Text>
        </View>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    background: { backgroundColor: COLORS.lightBlue, height: windowHeight },
  });
  
  export default UserScreen;
  