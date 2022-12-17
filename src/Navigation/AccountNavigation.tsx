import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Account } from "../Screens/Account/Account";

const AccountStack = createStackNavigator();

export const AccountNavigation = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Accounts"
        component={Account}
        options={{
          title: "Mi cuenta",
        }}
      />
    </AccountStack.Navigator>
  );
};
