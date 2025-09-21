import { Text } from "react-native";
import React from "react";
/** import tailwind */
import tw from 'twrnc';

const Button = ({ title }) => {
  return (
    <Text style={tw`text-white bg-primaryColor text-[16px] text-center py-3 font-semibold rounded-lg`}>
      {title}
    </Text>
  );
};

export default Button;
