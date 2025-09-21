import { Text, TouchableOpacity } from "react-native";
/** import tailwind */
import tw from 'twrnc';

const FlexFilters = ({ text, index, active, pressFunction }) => {
  return (
    <TouchableOpacity
      onPress={pressFunction}
      style={tw`flex-row items-center py-3 px-4 rounded-3xl space-x-2 ${
        active === index ? `bg-primaryColor` : `bg-white`
      }`}
    >
      <Text style={tw`font-semibold ${index === active ? `text-white` : ``}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default FlexFilters;
