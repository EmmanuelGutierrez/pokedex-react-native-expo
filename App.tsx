import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationTab } from "./src/Navigation/NavigationTabs";
import Toast from "react-native-toast-message";
import { AuthProvider } from "./src/context/AuthContext";
export default function App() {
  return (
    <AuthProvider>
      <Toast />
      <NavigationContainer>
        <NavigationTab />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
