import { ExpoConfig, ConfigContext } from "expo/config";
require("dotenv").config();

export default (data: ConfigContext) => {
  
  return {
    ...data.config,
    extra: {
      apiUrl: process.env.API_URL,
      eas: {
        projectId: "a878e261-772b-4371-a073-62a04b1c93f7",
      },
    },
  };
};
