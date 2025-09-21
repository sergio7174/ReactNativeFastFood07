import { View, Text } from "react-native";
import React from "react";
/** import tailwind */
import tw from 'twrnc';

const FlexDisplay = ({ children, className, ...props }) => {
  return (
    <View
      style={tw`flex flex-row items-center justify-between w-full ${className}}`}
      {...props}
    >
      {children}
    </View>
  );
};

export default FlexDisplay;
