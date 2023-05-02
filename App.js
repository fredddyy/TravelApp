import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import Notification from "./screens/Notification";
import Dice from "./screens/Dice";
import Wallet from "./screens/Wallet";
import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ForYou from "./screens/HomeScreen/ForYou";
import Explore from "./screens/HomeScreen/Explore";
import HomeHeader from "./components/homeScreen/HomeHeader";
import BottomTab from "./components/navigation/BottomTab";

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const DiceStack = createStackNavigator();
const WalletStack = createStackNavigator();
const FeedTopTabs = createMaterialTopTabNavigator();

export const FeedStackScreen = () => (
  <FeedTopTabs.Navigator>
    <FeedTopTabs.Screen name="For you" component={ForYou} />
    <FeedTopTabs.Screen name="Explore" component={Explore} />
  </FeedTopTabs.Navigator>
);

export const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerTitle: () => <HomeHeader />,
      headerStyle: {
        height: 150,
      },
    }}
  >
    <HomeStack.Screen name="Home1" component={FeedStackScreen} />
    <HomeStack.Screen name="Notification" component={Notification} />
  </HomeStack.Navigator>
);

export const DiceStackScreen = () => (
  <DiceStack.Navigator>
    <DiceStack.Screen name="Dice" component={Dice} />
  </DiceStack.Navigator>
);
export const WalletStackScreen = () => (
  <WalletStack.Navigator>
    <WalletStack.Screen name="Waller" component={Wallet} />
  </WalletStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" style="dark" />
      <BottomTab />

      {/* <AuthStack.Navigator>
        <AuthStack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Sign In" }}
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Create Account" }}
        />
      </AuthStack.Navigator> */}
      {/* <RootStack /> */}
    </NavigationContainer>
  );
}
