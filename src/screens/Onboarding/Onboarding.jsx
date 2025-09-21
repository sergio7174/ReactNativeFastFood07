import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable
} from "react-native";
import React, { useState } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import onboarding1 from "../../../assets/Onboarding/onb1.png";
import onboarding2 from "../../../assets/Onboarding/onb2.png";
import onboarding3 from "../../../assets/Onboarding/onb3.png";
import { ArrowSmallRightIcon } from "react-native-heroicons/solid";
import tw from 'twrnc';

const { height, width } = Dimensions.get("screen");

  const Onboarding = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState([0]);
  const sharedValues = useSharedValue(0);

  const screenOne = useAnimatedStyle(() => {
    return {
      opacity: withTiming(sharedValues.value === 0 ? 1 : 0, { duration: 1000 }),
    };
  });

  const screenTwo = useAnimatedStyle(() => {
    return {
      opacity: withTiming(sharedValues.value === 1 ? 1 : 0, { duration: 1000 }),
    };
  });

  const screenThree = useAnimatedStyle(() => {
    return {
      opacity: withTiming(sharedValues.value === 2 ? 1 : 0, { duration: 1000 }),
    };
  });

  const animatedStyles = [screenOne, screenTwo, screenThree];

  const images = [onboarding1, onboarding2, onboarding3];
  const texts = [
    {
      title: "Made with love",
      subTitle:
        "We prepare all dishes with love and passion! Especially for you!",
    },
    {
      title: "Delivered with care",
      subTitle: "Our couriers handle all your packages with great care.",
    },
    {
      title: "Enjoy your order",
      subTitle:
        "Take a moment with the hot,tasty and healthy meal we made for you.",
    },
  ];

  return (
    <View style={{ height, width, position: "relative" }}>
      <Animated.Image
        style={[
          StyleSheet.absoluteFill,
          { height, width },
          animatedStyles[sharedValues.value],
        ]}
        source={images[sharedValues.value]}
      />

      <Pressable onPress={() => navigation.navigate("authentication")} style={tw`mt-12 text-end px-6`}>
        <Text  style={tw`text-right text-gray-200 font-bold`}>SKIP</Text>
      </Pressable>
      <View style={tw`z-50 h-full`}>
        <Text
          style={{ marginTop: height / 6, fontWeight:'bold', fontSize: 40, color: 'white', textAlign: 'center', marginTop:10 }}
        >
          katsura
        </Text>
      </View>

      <View  style={tw`absolute w-full z-50 bottom-10`}>
        <View style={tw`mb-10 space-y-1 px-6`}>
          <Animated.Text
            style={[
              {
                textAlign: "center",
                fontSize: 18,
                fontWeight: 900,
                color: "white",
              },
              animatedStyles[sharedValues.value],
            ]}
          >
            {texts[sharedValues.value].title}
          </Animated.Text>
          <Animated.Text
            style={[
              {
                textAlign: "center",
                fontSize: 16,
                color: "white",
              },
              animatedStyles[sharedValues.value],
            ]}
          >
            {texts[sharedValues.value].subTitle}
          </Animated.Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <View
            style={tw`${
              active.includes(0) ? `bg-primaryColor` : `bg-gray-100`
            } w-[40%] py-1`}
          />
          <View
            style={tw`${
              active.includes(1) ? `border-primaryColor` : `border-gray-100`
            } border-[6px] p-2 rounded-full`}
          >
            <TouchableOpacity
              onPress={() => {
                if (sharedValues.value === 2) {
                  navigation.navigate("authentication");
                } else {
                  setActive((prev) => [...prev, prev[prev.length - 1] + 1]);
                  sharedValues.value = sharedValues.value + 1;
                }
              }}
              style={tw`h-16 w-16 bg-primaryColor rounded-full flex-row items-center justify-center`}
            >
              <ArrowSmallRightIcon size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={tw`${
              active.includes(2) ? `bg-primaryColor` : `bg-gray-100`
            } w-[40%] py-1`}
          />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
