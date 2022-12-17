import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { UserData } from "../../components/UserData/UserData";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useAuth } from "../../hooks/useAuth";

export const Account = () => {
  const { user } = useAuth();
  return (
    <SafeAreaView>
      {user ? <UserData /> : <LoginForm />}
    </SafeAreaView>
  );
};
