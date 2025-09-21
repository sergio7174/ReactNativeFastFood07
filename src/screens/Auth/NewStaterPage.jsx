
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import NetInfo from '@react-native-community/netinfo';
//Lottie is an ecosystem of libraries for parsing Adobe After Effects animations exported as JSON with bodymovin and rendering them natively!
import LottieView from 'lottie-react-native';
import tw from "twrnc";

const {height, width} = Dimensions.get('window');

 function NewStaterPage({navigation}) {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  const handleRetry = () => {
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
    });
  };

  if (!isConnected) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-white`}>
        <LottieView
          source={require('../../../assets/Images/NoNetwork.json')} // Use a "No Network" animation file
         
          autoPlay
          loop
          style={{width: 200, height: 200}}
        />
        <Text
          style={tw`text-black text-xl mt-4 font-family: 'Poppins-SemiBold'`}
          >
          No Internet Connection
        </Text>
        <TouchableOpacity
          onPress={handleRetry}
           style={tw`mt-6 bg-black px-10 py-3 rounded-full`}>
          <Text
            style={{fontFamily: 'Poppins-SemiBold', color:'white', fontSize:30}}>
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={tw`flex-1`}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <View>
        <Image
          source={require('../../../assets/Images/fast-food.jpg')}
          style={{width: width, height: height * 0.68}}
        />
        <LinearGradient
          colors={['transparent', '#f3f3f2']}
          style={{height: height * 0.1, width: width}}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          
        />
      </View>
      
      <View  style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
        <view>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.7}
          //style={tw`bg-black self-center justify-center h-16 rounded-3xl width: width * 0.85`}
          style={{ backgroundColor:'black', justifyContent:'center', borderRadius:10, width: 120, height: 50 , marginBottom:50}}
          >
          <Text
            style={tw`text-center text-lg text-white font-family: 'Poppins-Medium'`}
            >
            Get Started
          </Text>
        </TouchableOpacity>
        </view>
      </View>

      <View
        style={tw`flex-row justify-around items-center mx-8 margin-top: height * 0.03`}
        >
        <View
         
          style={{height: 2, width: width * 0.35, backgroundColor:'transparent'}}
        />
        {/*<Text style={tw`mx-2 text-neutral-500`}>OR</Text>*/}
        <View
          style={tw`bg-neutral-400 height: 2, width: width * 0.35`}
        />
      </View>
      <View style={tw`flex-row justify-around mx-5 items-center margin-top: height * 0.03 `}>
        <TouchableOpacity
          style={tw`bg-white p-0.5 h-11 rounded-full `}
          //   onPress={() => navigation.navigate('Login')}
        >
          <Image
            source={require('../../../assets/Images/google.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`p-2 rounded-full `}
          //   onPress={() => navigation.navigate('Login')}
        >
          <Image
            source={require('../../../assets/Images/facebook.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
        <TouchableOpacity
           style={tw`bg-white p-0.5 h-11 rounded-full`}
          //   onPress={() => navigation.navigate('Login')}
          >
          <Image
            source={require('../../../assets/Images/apple.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>

      {/*<View style={tw`flex-row absolute bottom-3 self-center`}>
        <Text
          style={tw`text-neutral-700 text-center font-family: 'Poppins-Medium'`}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity>
          <Text
           
            style={tw`text-black text-center font-family: 'Poppins-Bold'`}
            onPress={() => navigation.navigate('Signup')}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>*/}


    </View>
  );
};

export default NewStaterPage;
