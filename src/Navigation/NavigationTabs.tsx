import { StyleSheet, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
/* import Pokball from "../assets/pokebola.png"; */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavoriteNavigation } from "./FavoriteNavigation";
import { AccountNavigation } from "./AccountNavigation";
import { PokedexNavigation } from "./PokedexNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

export type RootTabsParamList = {
  account: undefined;
  pokedex: undefined;
  favorites: undefined;
  pokemon: { id: number };
};

export interface CommonPropsI<T extends keyof RootTabsParamList> {
  navigation: StackNavigationProp<RootTabsParamList, T>;
  route: RouteProp<RootTabsParamList, T>;
}

const Tab = createBottomTabNavigator<RootTabsParamList>();

export const NavigationTab = () => {
  return (
    <Tab.Navigator initialRouteName="pokedex">
      <Tab.Screen
        name="account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ size, focused, color }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size }) => (
            <Image
              source={require("../assets/pokebola.png")}
              style={{ width: size + 40, height: size + 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="favorites"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ size, focused, color }) => (
            <Icon
              name="heart"
              color={focused ? "#ed5564" : color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
