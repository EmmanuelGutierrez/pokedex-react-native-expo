import constants from "expo-constants";

interface configI {
  apiUrl: string;
}

export const config: configI = {
  apiUrl: constants.expoConfig?.extra?.apiUrl,
};
