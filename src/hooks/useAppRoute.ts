import { RouteProp, useRoute } from "@react-navigation/native";
import { RootTabsParamList } from "../Navigation/NavigationTabs";

export function useAppRoute<T extends keyof RootTabsParamList>() {
  return useRoute<RouteProp<RootTabsParamList, T>>();
}
