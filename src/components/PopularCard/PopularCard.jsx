import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import tw from 'twrnc';

const PopularCard = ({ data }) => {
const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("order", { id: data.id, category: data.category })}
       style={tw`rounded-xl overflow-hidden mb-6`}
    >
      <Image source={data.image} style={tw`w-full h-40`} />
      <View style={tw`bg-white px-4 py-2 flex-row justify-between items-center`}>
        <View>
          <Text style={tw`font-bold text-lg`}>{data.name}</Text>
          <Text style={tw`text-sm font-[500] text-gray-600`}>
            Burgers.Fast Food
          </Text>
        </View>
        <View>
          <View style={tw`flex-row items-center space-x-3`}>
            <StarIcon color="#0BCE83" size={18} />
            <Text style={tw`text-sm text-gray-600 font-[500]`}>
              {data.rating}
            </Text>
          </View>
          <Text style={tw`text-sm text-gray-600 font-[500]`}>
            {data.delivery_time}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PopularCard;
