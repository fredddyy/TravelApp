import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import HomeHeader from "../components/homeScreen/HomeHeader";
import FeedList from "../components/homeScreen/Feeds/FeedList";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <HomeHeader />
      {/* <FeedList /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
