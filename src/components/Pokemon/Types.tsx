import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { pokemonType } from "../../interfaces/pokemonInterface";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";
import { capitalize } from "lodash";

interface TypesPropsI {
  types: pokemonType[];
}

export const Types: React.FC<TypesPropsI> = ({ types }) => {
  return (
    <View style={styles.content}>
      {types.map((type) => (
        <View
          key={type.type.name}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(type.type.name),
          }}
        >
          <Text>{capitalize(type.type.name)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderRadius: 20,
  },
});
