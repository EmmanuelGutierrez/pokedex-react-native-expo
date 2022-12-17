import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Pokedex } from "../Screens/Pokedex/Pokedex";
import { Pokemon } from "../Screens/Pokemon/Pokemon";

export type PokedexStackParamList = {
  pokedex: undefined;
  pokemon: { id: number };
};

const PokedexStack = createStackNavigator<PokedexStackParamList>();

export const PokedexNavigation = () => {
  return (
    <PokedexStack.Navigator>
      <PokedexStack.Screen
        name="pokedex"
        component={Pokedex}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <PokedexStack.Screen
        name="pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </PokedexStack.Navigator>
  );
};
