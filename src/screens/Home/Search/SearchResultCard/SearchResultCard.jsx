import { View, Text, Image } from "react-native";
import React from "react";
/** import tailwind */
import tw from 'twrnc';


const SearchResultCard = ({ data, width }) => {
    const handleTrimText = (text) => {
        if(text.length > 15){
            return text.slice(0, 15) + '...'
        } return text;
    }


  return (
    <View style={tw`rounded-xl overflow-hidden mb-4 ${ width }`}>
      <Image style={tw`w-full h-24`} source={data.image} />
      <View style={tw`bg-white p-2`}>
        <Text style={tw`font-bold text-[14px]`}>{handleTrimText(data.name)}</Text>
        <View style={tw`flex-row items-center space-y-1 justify-between`}>
          <Text style={tw`text-gray-600 text-[12px]`}>{data.duration}</Text>
          <Text style={tw`text-gray-600 text-[12px]`}>${data.price}.00</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchResultCard;
