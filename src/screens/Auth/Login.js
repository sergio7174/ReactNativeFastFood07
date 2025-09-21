import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { theme_color, theme_primary, URL } from "../../constants";
import { Logo_img } from "../../../assets/Images/";
import {  IconButton, TextInput } from 'react-native-paper';
import { CommonActions, useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import { auth } from '../../firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
  // Import an icon library like 'react-native-vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const color = [ "#090979", "#433eb6",  "#433eb6"];


export default function Login({navigation}) {



 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
// to show the password when click on the icon
const [showPassword, setShowPassword] = useState(false);
    
      //function for login User
    
     loginUser = async (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredentials) => {
            const user = userCredentials.user;
           // SaveIS_USER_LOGGED_IN in storage to verify user login
            AsyncStorage.setItem('IS_USER_LOGGED_IN', 'yes');
            alert.Alert("Logged in with", user.email);
      })
      .catch(error => alert(error.message));
      };

//function to implement forget password
  const forgetPassword = () => {
    
      auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        alert(error);
      });
  };


  return (
    <ScrollView contentContainerStyle={{flex:1}}>

      <LinearGradient 
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }} 
          colors={color} 
          style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            
        <Image  tintColor={'white'} source={Logo_img} style={styles.logo} />
         <LinearGradient style={styles.loginContainer}  
              colors={['transparent', '#f3f3f2']}> 

        <View style={{
            marginBottom:5, 
            marginTop:-340 ,
            width: '100%', 
            display:'flex', 
            flexDirection:'column', 
            justifyContent: 'center', 
            flexWrap:'wrap',
            alignContent:'center'}}>     
           <Text style={styles.loginText}>Login for best experience</Text>
           <Text style={styles.loginTextTwo}>Enter your Email and Password</Text>
           <Text style={styles.loginTextTwo}>to continue</Text>    
         </View>  
         
          <TextInput
                mode={"outlined"}
                label="Email"
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
                style={styles.textInput}
                outlineColor="#433eb6"
                activeOutlineColor="#433eb6"
                outlineStyle={{ borderWidth: 2 , borderRadius:10}}/>
       
             

        <View style={{display:'flex' , flexDirection:'row', justifyContent:'space-between', flexWrap:'no-wrap' , width:'100%', marginLeft: 40}}>     
         <TextInput
            mode={"outlined"}
            label="Password"
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            autoCorrect={false}
            secureTextEntry={!showPassword}
            style={styles.textInput}
            outlineColor="#433eb6"
            activeOutlineColor="#433eb6"
            outlineStyle={{ borderWidth: 2 , borderRadius:10}}/>
          
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} 
            style={{position: 'relative', top: 32, right: 70}}>
                <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="black" />
            </TouchableOpacity>

            </View>

    <TouchableOpacity onPress={()=>navigation.navigate('Signup')}  
         style={{position:'absolute', top: height * 0.45,left:width*0.12}}>
        <Text style={styles.registerText}>Don't have an account?
          <Text style={{ fontStyle:'italic', color:'red', fontSize:18}}> Sign up now</Text>
        </Text>
    </TouchableOpacity> 

    <TouchableOpacity 
        onPress={()=>loginUser(email, password)}  
        style={{position:'absolute', top: height * 0.55, elevation:5}}>
      <LinearGradient  
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }} 
          colors={color} 
          style={styles.loginbtn}>
         <Text style={styles.btnText}>Login</Text>
       </LinearGradient>
    </TouchableOpacity>


          
           
       
            
       
      {/*} </View> {/*** end of input text fields */}   
        
       
           </LinearGradient>


   </LinearGradient>


  
  </ScrollView>
  
  

  );
}

const styles = StyleSheet.create({
    logo: {
        width: width * 0.3,
        height: width * 0.3,
        position: 'absolute',
        top: height * 0.065,
    

    },

    loginContainer: {
        width: width * 0.98,
        width: '100%',
        height: height * 0.9,
        borderWidth: 2,
        borderColor: '#EFE9E7',
        borderTopLeftRadius: width * 0.25,
        justifyContent: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.25,
        backgroundColor: 'white',
        borderTopRightRadius: 10


    },

    textInput: {

        width: width * 0.85,
        width: '90%',
        height: width * 0.1,
        marginTop: 20,
        //position: 'relative',
        //top:30,
        //top: height * 0.08,
        backgroundColor:'transparent',
        //marginBottom: 10

    },

    loginText:{
        //position:'absolute',
        //position:'relative',
        fontSize:width*0.065,
        alignSelf:'center',
        //top:height*0.08,
        //left:width*0.12,
        
        color:'#433eb6',
        fontFamily:'RobotoSlab_semiBold',
        marginBottom:5
        
    },
    loginTextTwo:{
        //position:'relative',
        fontSize:width*0.05,
        alignSelf:'center',
        //top:height*0.12,
        //left:width*0.12,
       fontFamily:'RobotoSlab_regular',
        color:'#433eb6'

    },
    loginbtn:{
        width: width * 0.53,
        height: width * 0.13,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
       
    },
    btnText:{
        fontSize:width*0.045,
        color:'white',
        fontFamily:'RobotoSlab_regular'
    },
    registerText:{
        fontSize:width*0.038,
        fontWeight:'500',
         color:'#433eb6',
         fontFamily:'RobotoSlab_semiBold'
         
       
    },
    divider:{
            height:2.5,
            width:width*0.35,
             backgroundColor:'#433eb6',
             opacity:0.8
            
    },
    dividercontainer:{
        
        width:width*0.8,
        height:width*0.15,
        position:'absolute',
        top: height * 0.5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:5

    },
     container: {
            display:'flex',
            flexDirection: 'column',
            justifyContent:'center',
            flexWrap:'wrap',
            width: "90%",
            backgroundColor: 'lightBlue',
            borderRadius: 10,
            paddingVertical: 30,
            paddingHorizontal: 20,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
            marginBottom: 100,
            borderColor:'blue',
            borderWidth: 2
        },
    
})
