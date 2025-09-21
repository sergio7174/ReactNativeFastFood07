import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { COLORS } from "../constants/index";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


/**** import routes */
import Profile from "../screens/Profile";
import HomeBody from "../screens/Home/HomeBody/HomeBody";
import Cart from "../screens/Home/Cart/Cart";
import Search from "../screens/Home/Search/Search";



const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 55,
  },
};

export default function BottomTabNavigation() {

  return (
   
      <Tab.Navigator 
        screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#0BCE83",
        tabBarInactiveTintColor: "black",
        
      }}> 
    
        <Tab.Screen
              name="HomeBody"
              component={HomeBody}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Ionicons
                      name={focused ? "home" : "home-outline"}
                      color={focused ? COLORS.primary : COLORS.gray2}
                      size={24}
                    />
                  );
                },
              }}
            />
        <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "search-sharp" : "search"}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name={focused ? "shopping-cart" : "shopping-bag"}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={24}
              />
            );
          },
        }}
      />
      
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Ionicons
                      name={focused ? "person" : "person-outline"}
                      color={focused ? COLORS.primary : COLORS.gray2}
                      size={24}
                    />
                  );
                },
              }}
            />
      
      </Tab.Navigator>
 

  );
}