import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { Image } from "react-native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* First Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-2xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-2xl font-semibold">Travel</Text>
      </View>

      {/* Second Setion  */}
      <View className="px-4 mt-6 space-y-2">
        <Text className="text-[#3C6072] text-[32px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[28px] font-bold">
          Good Moments
        </Text>

        <Text className="text-[#3C6072] text-base">
          lorem ekffg fekjfgejgf jefkrgej esdkfggdjgfjdk kfdjgfkjg dfkgd jf
          jdgedy
        </Text>
      </View>

      {/* Circel section */}
      <View className="w-[270px] h-[270px] bg-[#00BCC9] rounded-full absolute bottom-20 -right-20"></View>
      <View className="w-[270px] h-[270px] bg-[#E99265] rounded-full absolute -bottom-16 -left-20"></View>

      {/* Image Container */}
      <View className="flex-1 relative items-center justify-center">
        <Image source={HeroImage} className="h-[100%] w-[80%] object-cover" />
        <View className="absolute h-20 w-20 items-center bottom-20 bg-[#00BCC9] rounded-full justify-center">
          <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
