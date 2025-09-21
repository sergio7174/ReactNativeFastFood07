import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Logo_img } from "../../../assets/Images/";
import {  IconButton, TextInput } from 'react-native-paper';
import { auth } from '../../firebase/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  // Import an icon library like 'react-native-vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import { registerSchema } from '../../validations/registerSchema';
import SubmitButton from '../../components/SubmitButton';

const { width, height } = Dimensions.get('window');
const color = [ "#090979", "#433eb6",  "#433eb6"];



export default function RegisterScreen({ navigation }){

const { width, height } = Dimensions.get('window');
const color = ["#090979", "#433eb6", "#433eb6"];

//useState for all the fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
 // to show the password when click on the icon
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordcp, setShowPasswordcp] = useState(false);

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    
const checkAndRegister = async() => {
    if (
      !email || !password || !confirmPassword
      
    ) {
      alert("Please fill in all fields.");
      return;
    }

    /**** my block ************************************/

     alert("Im at checkAndRegiste - line 48 - ready to registerSchema.validateSync ");
    try {
            registerSchema.validateSync({ email, password, confirmPassword })
            
        } catch (error) {
            switch (error.path) {
                case "email":
                    setErrorEmail(error.message)
                    setErrorPassword("")
                    setErrorConfirmPassword("")
                    break
                case "password":
                    setErrorEmail("")
                    setErrorPassword(error.message)
                    setErrorConfirmPassword("")
                    break
                case "confirmPassword":
                    setErrorEmail("")
                    setErrorPassword("")
                    setErrorConfirmPassword(error.message)
                    break

            }
        }

    /** End of my block *******************************/

    // All fields are filled, proceed with registration

    alert("Im at checkAndRegiste - I leave registerSchema.validateSync - line 98 - ready to registerUser ");


    registerUser(email, password);
  };

  //function for registration of user

  registerUser = async (email, password) => {

     alert("Im Pass checkAndRegiste - I leave registerSchema.validateSync - line 85 - Im at registerUser ");

     const auth = getAuth();
      try {
       
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);

      alert('Signup - line 93 - User Created OK', email);
      
    } catch (e) { console.error('Error adding document: ', e);}}


  return (
    <ScrollView contentContainerStyle={{flex:1}}>

      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={color} 
         style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <Image  tintColor={'white'} source={Logo_img} style={styles.logo} />
         <LinearGradient style={styles.loginContainer}  
              colors={['transparent', '#f3f3f2']}> 

        <View style={{
            marginBottom:5, 
            marginTop:-300 ,
            width: '100%', 
            display:'flex', 
            flexDirection:'column', 
            justifyContent: 'center', 
            flexWrap:'wrap',
            alignContent:'center'}}>     
           <Text style={styles.loginText}>Create an account</Text>
           <Text style={styles.loginTextTwo}>Please enter your details</Text>
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
        {/**** Confirm Password Field ********/}

        <View style={{display:'flex' , flexDirection:'row', justifyContent:'space-between', flexWrap:'no-wrap' , width:'100%', marginLeft: 40}}>     
         <TextInput
            mode={"outlined"}
            label="Confirm Password"
            placeholder="Confirm Password"
            onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
            autoCorrect={false}
            secureTextEntry={!showPasswordcp}
            style={styles.textInput}
            outlineColor="#433eb6"
            activeOutlineColor="#433eb6"
            outlineStyle={{ borderWidth: 2 , borderRadius:10}}/>
          
            <TouchableOpacity onPress={() => setShowPasswordcp(!showPasswordcp)} 
            style={{position: 'relative', top: 32, right: 70}}>
                <Icon name={showPasswordcp ? 'eye' : 'eye-slash'} size={20} color="black" />
            </TouchableOpacity>

            </View>



        {/**** End of confirm password Field */}
    <TouchableOpacity onPress={()=>navigation.navigate('Login')}  
         style={{position:'absolute', top: height * 0.45,left:width*0.12}}>
        <Text style={styles.registerText}>Have an Account?
          <Text style={{ fontStyle:'italic', color:'red', fontSize:18}}> Sign In now</Text>
        </Text>
    </TouchableOpacity> 

    <TouchableOpacity 
        onPress={()=>{checkAndRegister}}  
        style={{position:'relative', top: height * 0.15, elevation:5, width:'50%', marginLeft: '25%'}}>
       <SubmitButton  onPress={checkAndRegister} title="Sign Up"  />
    </TouchableOpacity>  
         
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
