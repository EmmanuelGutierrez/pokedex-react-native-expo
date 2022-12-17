import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React, { useState, useCallback } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonFavoriteApi } from "../../api/favorites";

const ItemMenu = ({ text, title }: { title: string; text: string }) => (
  <View style={styles.itemMenu}>
    <Text style={styles.itemMenuTitle}>{title}</Text>
    <Text>{text}</Text>
  </View>
);

export const UserData = () => {
  const { user, logOut } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonFavoriteApi();
          setTotal(response.length);
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );

  if (!user) return <></>;
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>{`${user.firstName} ${user.lastname}`}</Text>
      </View>
      <View>
        <ItemMenu text={`${user.firstName} ${user.lastname}`} title="Nombre" />
        <ItemMenu text={user.username} title="Username" />
        <ItemMenu text={user.email} title="Email" />
        <ItemMenu text={total.toString()} title="Total de favoritos" />
      </View>
      <Pressable onPress={logOut} style={styles.btnLogout}>
        <Text style={styles.btnLogoutText}>Desconectarse</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    marginTop: 20,
    padding: 5,
    backgroundColor: "#dc67ac",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 200,
    borderRadius: 10,
    alignSelf: "center",
  },
  btnLogoutText: {
    color: "white",
  },
});
