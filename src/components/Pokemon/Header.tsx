import { View, Text, StyleSheet, Image, PixelRatio } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";
import { capitalize } from "lodash";

interface HeaderPropsI {
  name: string;
  order: number;
  image: string;
  type: string;
}

export const Header: React.FC<HeaderPropsI> = ({
  image,
  name,
  order,
  type,
}) => {
  const bgStyle = {
    ...styles.bg,
    backgroundColor: getColorByPokemonType(type),
  };
  return (
    <>
      <View style={bgStyle}></View>
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, "0")}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    height: 300,
    width: 250,
    resizeMode: "contain",
  },
});
