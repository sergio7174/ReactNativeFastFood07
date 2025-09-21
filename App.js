// file: App.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from 'react';

import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/Store";
import { PersistGate } from "redux-persist/integration/react";

/*** import pages Auth*/
import Login from './src/screens/Auth/Login';
import Signup from './src/screens/Auth/Signup';
import NewStaterPage from './src/screens/Auth/NewStaterPage';

//*** import products routes */
import Onboarding from "./src/screens/Onboarding/Onboarding";
import ShareLocation from "./src/screens/ShareLocation/ShareLocation";
import Order from "./src/screens/Order/Order";
import CheckOut from "./src/screens/CheckOut/CheckOut";
import OrderSuccess from "./src/screens/OrderSuccess/OrderSuccess";
import OrderDetails from "./src/screens/OrderDetails/OrderDetails";
import CreditCardDetails from "./src/screens/CreditCard/CreditCardDetails";
import HomeByBurger from './src/screens/Home/HomeByCategory/HomeByBurger';
import HomeByPizza from './src/screens/Home/HomeByCategory/HomeByPizza';
import HomeBySalad from './src/screens/Home/HomeByCategory/HomeBySalad';

import { auth } from './src/firebase/firebaseConfig'; // Assuming you have your firebase config set up 
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';

/*** Routes for isAuthenticated users */
import HomeScreen from './src/components/HomeScreen';

const Stack = createNativeStackNavigator();


 function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });
    return unsubscribe;
  }, []);


    return (
     
        

     <Stack.Navigator >
      {!isAuthenticated && (
        <>
          <Stack.Screen name="Starter" component={NewStaterPage} options={{ headerShown:false }}/>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        </>
      )}
      {isAuthenticated && (
        <>
           <Stack.Screen 
             name="Dashboard" 
             component={BottomTabNavigation} 
             options={{ headerShown: false }}/>

           <Stack.Screen
                component={Onboarding}
                name="onboarding"
                options={{ headerShown: false }}
              />
            <Stack.Screen
                component={ShareLocation}
                name="location"
                options={{ headerShown: false }}
              />
            <Stack.Screen
                component={Order}
                name="order"
                options={{ headerShown: false }}
              />
            <Stack.Screen
                component={CheckOut}
                name="checkout"
                options={{ headerShown: false }}
              />
            <Stack.Screen
                component={OrderSuccess}
                name="ordersuccess"
                options={{ headerShown: false }}
              />
            <Stack.Screen
                component={OrderDetails}
                name="orderdetails"
                options={{ headerShown: false }}
              />
            <Stack.Screen
                component={CreditCardDetails}
                name="creditcard"
                options={{ headerShown: false }}
              />
           <Stack.Screen
                component={HomeByBurger}
                name="HomeByBurger"
                options={{ headerShown: false }}
              /> 
          <Stack.Screen
                component={HomeByPizza}
                name="HomeByPizza"
                options={{ headerShown: false }}
              />
         <Stack.Screen
                component={HomeBySalad}
                name="HomeBySalad"
                options={{ headerShown: false }}
              />        
        </>
      )}  

    </Stack.Navigator>

   
    );


}

export default function AppContainer() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/Fonts/Poppins-Regular.ttf'),
    light: require('./assets/Fonts/Poppins-Light.ttf'),
    medium: require('./assets/Fonts/Poppins-Medium.ttf'),
    bold: require('./assets/Fonts/Poppins-Bold.ttf'),
    extrabold: require('./assets/Fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/Fonts/Poppins-SemiBold.ttf'),
  });

   const onLayoutRootView = useCallback(async () => {
  
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

 return (
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <GestureHandlerRootView>
      <PaperProvider>
        <NavigationContainer onReady={onLayoutRootView}>
         <App />
        </NavigationContainer>
     </PaperProvider>
    </GestureHandlerRootView> 
  </PersistGate>
  </Provider> 
  );
 
}
