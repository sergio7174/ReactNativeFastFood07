import { View, Text, Image } from "react-native";
import React from "react";
/** import tailwind */
import tw from 'twrnc';

const CartCard = ({ data }) => {
  return (
    <View style={tw`flex-row items-center p-2 bg-white rounded-xl mb-4`}>
      <Image style={tw`h-16 w-[20%] rounded-lg`} source={data.image} />
      <View style={tw`flex-1 ml-4`}>
        <Text style={tw`font-bold text-lg`}>{data.name}</Text>
        <Text style={tw`text-gray-500 font-[500]`}>{data.description}</Text>
        <Text style={tw`font-semibold`}>
          {data.count} item ~ {data.price}
        </Text>
      </View>
    </View>
  );
};

export default CartCard;
