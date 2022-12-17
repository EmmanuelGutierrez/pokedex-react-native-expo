import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { CommonPropsI } from "../../Navigation/NavigationTabs";
import { useAppNavigation } from "../../hooks/useAppNavigation";

export const NoLogged = () => {
  const navigation = useAppNavigation<"favorites">();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>No estas logeado</Text>
      <Button
        title="Ir al login"
        onPress={() => navigation.navigate("account")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});
