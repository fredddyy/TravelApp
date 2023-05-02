import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { assets } from "../../../constants";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

const FeedItem = () => {
  return (
    <View>
      <View className="py-2 border-gray-300 px-2">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-start justify-center">
            <TouchableOpacity className="h-11 w-11 bg-white rounded-full items-center justify-center">
              <Image
                source={assets.person3}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  borderColor: "black",
                  borderTopWidth: 2,
                }}
              />
            </TouchableOpacity>
            <View className="ml-2">
              <View className="flex-row items-center space-x-2">
                <Text className="font-bold text-base text-white">
                  She.Godfather
                </Text>
                <Text className="text-xs text-gray-400 font-bold">
                  @Cryptogodfather
                </Text>
              </View>

              <View className="flex-row space-x-2 items-start">
                <Text className="text-gray-400 text-xs">Is staking:</Text>
                <View>
                  <View className="flex-row items-center justify-center space-x-1">
                    <Image
                      source={assets.btc}
                      style={{
                        height: 20,
                        width: 20,
                      }}
                    />

                    <Text className="text-white font-bold">0.000075 BTC</Text>
                  </View>
                  <Text className="text-xs text-right font-bold text-[#2fb48c]">
                    1,000 NGN
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center space-x-1">
                <FontAwesome name="clock" color="gray" />
                <Text className="text-xs text-gray-400">20 mins ago</Text>
              </View>
            </View>
          </View>
          <View className="bg-[#09946a] p-2 space-x-1 rounded-xl flex-row items-center">
            <FontAwesome name="dice" color="white" size={15} />
            <Text className="text-white font-bold">Roll</Text>
          </View>
        </View>
        <View className="h-[1px] w-[95%] mx-auto bg-slate-200 mt-2"></View>
      </View>
    </View>
  );
};

export default FeedItem;
