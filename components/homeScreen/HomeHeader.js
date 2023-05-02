import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { Image } from "react-native";
import { assets } from "../../constants";

const HomeHeader = () => {
  return (
    <View className="w-[90vw]">
      <View className="flex-row items-center justify-between mb-2">
        {/* Profile Image  */}
        <View className="flex-row  items-center justify-center space-x-2">
          <View className="bg-black h-14 w-14 rounded-full items-center justify-center">
            <Image source={assets.person3} style={{ height: 51, width: 51 }} />
          </View>
          <View className="bg-black rounded-full h-14 px-1 pr-2 flex-row items-center justify-center">
            <View className="bg-white rounded-full h-12 w-12 items-center justify-center mr-1 ">
              <FontAwesome name="btc" size={30} />
            </View>
            <Text className="text-white font-bold text-base">0.000075</Text>
          </View>
        </View>
        <View>
          <FontAwesome name="bell" size={30} />
        </View>
      </View>
      <View className="flex-row">
        <Text className="text-xl">Hello,</Text>
        <Text className="text-xl font-bold"> Fred Boakye</Text>
      </View>
    </View>
  );
};

export default HomeHeader;
