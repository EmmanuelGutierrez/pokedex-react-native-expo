import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Toast from "react-native-toast-message";
import { user, userData } from "../../utils/userDB";
import { useAuth } from "../../hooks/useAuth";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = {
  username: Yup.string().required("El usuario es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
};

export const LoginForm = () => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validationSchema),
    validateOnChange: false,
    onSubmit: ({ password, username }) => {
      if (username !== user.username || password !== user.password) {
        console.log("El usuario o la contrase;a no son correctos");
        Toast.show({
          type: "error",
          text2: "El usuario o la contrase;a no son correctos",
        });
      } else {
        console.log("Login correcto");
        login();
        Toast.show({ type: "success", text2: "Login correcto" });
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesion</Text>
      <TextInput
        placeholder="Nombre de usuario"
        autoCapitalize="none"
        style={styles.input}
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      {!!formik.errors.username && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder="Contrase;a"
        autoCapitalize="none"
        secureTextEntry={true}
        style={styles.input}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      {!!formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}
      <Button title="Entrar" onPress={() => formik.handleSubmit()} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  error: {
    textAlign: "center",
    color: "#f00",
  },
});
