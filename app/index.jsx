import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

import { Redirect, router } from "expo-router";

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center px-4 min-h-[90vh]">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            {/* <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute right-0 bottom-[130px]"
              resizeMode="contain"
            /> */}
            <Text className="text-xs text-white/70 text-center mt-4 font-pregular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              asperiores suscipit, ab minima.
            </Text>
            <CustomButton
              title="Continue with Email"
              handlePress={() => {
                router.push("/sign-in");
              }}
              containerStyles="w-full max-w-full min-w-full mt-7"
            />
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
