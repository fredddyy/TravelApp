import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";

const SignIn = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>SignIn screen</Text>
      <Button title="Sign in" onPress={() => {}}></Button>
      <Button
        title="Create Account"
        onPress={() => {
          navigation.push("SignUp");
        }}
      ></Button>
    </View>
  );
};

export default SignIn;
