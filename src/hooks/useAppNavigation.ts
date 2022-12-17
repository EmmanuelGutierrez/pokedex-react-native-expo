import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootTabsParamList } from "../Navigation/NavigationTabs";

export function useAppNavigation<T extends keyof RootTabsParamList>() {
  return useNavigation<StackNavigationProp<RootTabsParamList, T>>();
}
