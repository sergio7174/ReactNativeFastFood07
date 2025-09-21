import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Button from "../../components/Button/Button";
/** import tailwind */
import tw from 'twrnc';

const OrderSuccess = ({ navigation }) => {
  return (
    <View  style={tw`flex-1 justify-center items-center`}>
      <View style={tw`justify-center items-center bg-white w-[80%] h-[70%] rounded-[35px]`}>
        <Image
          style={tw`w-[70%] h-[30%] my-3`}
          source={require("../../../assets/OrderSuccess/Success.png")}
        />
        <View style={tw`justify-center items-center gap-1`}>
          <Text style={tw`text-2xl font-extrabold`}>Order Successful !</Text>
          <Text style={tw`text-base font-medium text-gray-700`}>
            Thanks for your order.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeBody")}
          style={tw`w-[60%] mt-20`}
        >
          <Button title="BACK HOME" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`my-4`}>
          <Text style={tw`text-base font-medium text-primaryColor`}>
            TRACK ORDER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({});
