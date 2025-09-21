import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  Pressable,
} from "react-native";

import { populars } from "../../_DB/populars";
import { mockGrillBurger, dataBurger } from "../../_DB/BurgerProducts";

import {
  PlusIcon,
  MinusIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import delivery from "../../../assets/Order/delivery.png";
import rating from "../../../assets/Order/rating.png";
import fire from "../../../assets/Order/fire.png";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import RadioButtonRN from "radio-buttons-react-native";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/Features/Cart/CartSlice";
import HeaderGoBackStack from "../../components/HeaderGoBackStack" ;
/** import tailwind */
import tw from 'twrnc';

const Order = ({ route, navigation }) => {


  const [count, setCount] = useState(1);
  const { id, category } = route.params;
  const { width } = Dimensions.get("screen");


  const thisOrder = ({id,category}) => {
  
    alert("Im at Order - line 45 - and the id is: " + id + " and the category is: " + category);
  if (category ==="Burger") {  
     //populars.find((item) => item.id === id);
   mockGrillBurger.find((item) => item.id === id);
  //alert("Im at Order - line 49 - and the item.name: " + item.name + " and the category is: " + item.category);

  //alert("Im at Order Component - line 51 - I pass the condition category === Burger so now I will find the item with id: "+ item.id); 
  }}

thisOrder({id,category});

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Order Screen</Text>
    </View>
  );
}

export default Order;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.0,
    shadowRadius: 1.0,
    elevation: 24,
  },

  flexRow: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
