import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
/** import tailwind */
import tw from 'twrnc';

const CategoryCard = ({ data, index, active, pressFunction }) => {
  return (
    <TouchableOpacity
      onPress={pressFunction}
      style={tw`flex-row flew-wrap items-center py-3 px-4 rounded-xl space-x-2 ${
        active === index ? `bg-cyan-500` : `bg-white`
      }`}
    >
      <View style={tw`bg-white p-1 rounded-lg`}>
        <Image source={data.image} style={tw`h-5 w-5`} />
      </View>
      <Text style={tw`font-semibold ${index === active ? `text-white` : ``}`}>
        {data.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
