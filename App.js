import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <Text className="text-gray-400 text-md font-bold mt-2">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
