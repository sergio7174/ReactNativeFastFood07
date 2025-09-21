import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  ChevronLeftIcon,
  TagIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import tw from 'twrnc';

const OrderDetails = ({ route, navigation }) => {
  const item = route.params.item;
  const index = Math.round(item.id * 1000);
  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView>
        <View  style={tw`px-7 pt-4`}>
          <View style={tw`flex-row items-center pb-2`}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeftIcon color="black" size={24} />
            </TouchableOpacity>
            <View style={tw`flex-row justify-center w-[93%] items-center`}>
              <Text style={tw`text-xl font-bold`}>Order #{index}FF</Text>
            </View>
          </View>
          <Image
            style={tw`h-60 w-full my-3 self-center rounded`}
            source={item.image}
          />
          <View style={tw`gap-1`}>
            <Text style={tw`text-2xl font-bold`}>{item.name}</Text>
            <Text style={tw`text-base`}>Order Completed</Text>
            <Text style={tw`text-base`}>{item.date}</Text>
            <Text style={tw`text-base`}>At {item.time}</Text>
            <Text style={tw`text-xl font-semibold pt-2`}>Your Order</Text>
            <Text style={tw`text-base`}>{item.name}</Text>
            <Text style={tw`text-base`}>Lemonade</Text>
            <Text style={tw`text-base`}>{item.count} Item(s)</Text>
            <View style={tw`flex-row pt-3`}>
              <TagIcon size={20} color="black" />
              <Text style={tw`ml-5`}>Total : {item.price}</Text>
            </View>
            <View style={tw`flex-row pt-3 mb-6`}>
              <UserCircleIcon size={20} color="black" />
              <Text style={tw`ml-5`}>Delivered by Peter Ozenua</Text>
            </View>
            <Text style={tw`text-primaryColor text-[16px] text-center py-3 mb-5 font-semibold border border-gray-300 rounded-lg`}>
              VIEW RECEIPT
            </Text>
            <Text style={tw`text-primaryColor text-[16px] text-center py-3 mb-12 font-semibold border border-gray-300 rounded-lg`}>
              RATE DELIVERY
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetails;
