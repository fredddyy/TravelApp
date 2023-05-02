import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DiceStackScreen, HomeStackScreen, WalletStackScreen } from "../../App";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import * as Animatable from "react-native-animatable";

const BottomTabs = createBottomTabNavigator();
const TabsArr = [
  { name: "home", label: "Home", component: HomeStackScreen },
  { name: "dice-six", label: "Dice", component: DiceStackScreen },
  { name: "wallet", label: "Wallet", component: WalletStackScreen },
];

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 },
};

const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
};

const circle1 = {
  0: { scale: 0 },
  //   0.3: { scale: 0.2 },
  //   0.5: { scale: 0.7 },
  //   0.8: { scale: 0.9 },
  1: { scale: 1 },
};

const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabBotton = (props) => {
  const { screen, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);
  return (
    <TouchableOpacity className="flex-1 bg-black justify-center items-center rounded-full">
      <Animatable.View
        ref={viewRef}
        duration={200}
        className="flex-1 justify-center items-center rounded-full"
      >
        <View className=" bg-black h-[55px] items-center justify-center w-[55px] border-4 border-black rounded-[70px]">
          <Animatable.View
            ref={circleRef}
            duration={200}
            className=" justify-center items-center bg-white rounded-[50px]"
            style={{ ...StyleSheet.absoluteFillObject }}
          />
          <FontAwesome
            onPress={onPress}
            name={screen.name}
            color={focused ? "black" : "white"}
            size={30}
          />
        </View>
        <Animatable.Text ref={textRef} className="text-xs font-bold text-white">
          {screen.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const BottomTab = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          height: 70,
          position: "absolute",
          bottom: 10,
          right: 16,
          left: 16,
          borderRadius: 70,
        },
      }}
    >
      {TabsArr.map((screen, index) => (
        <BottomTabs.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabBotton {...props} screen={screen} />,
          }}
        />
      ))}
    </BottomTabs.Navigator>
  );
};

export default BottomTab;
