import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Favorites } from "../Screens/Favorites/Favorites";
import { Pokemon } from "../Screens/Pokemon/Pokemon";

const FavoriteStack = createStackNavigator();

export const FavoriteNavigation = () => {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen
        name="favorites"
        component={Favorites}
        options={{
          title: "Mis favoritos",
        }}
      />
      <FavoriteStack.Screen
        name="pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </FavoriteStack.Navigator>
  );
};
