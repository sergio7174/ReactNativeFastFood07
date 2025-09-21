import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
//import Color from '../theme/Color'
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const HeaderGoBackStack = () => {

    const navigation = useNavigation();
    const onPressBackButton = () => { navigation.goBack();


 
};
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button]} onPress={onPressBackButton}>
                <AntDesign name="arrowleft" size={17} style={{color:'white'}} />
            </TouchableOpacity>
            {/*<Text style={{ color: 'white', fontSize: wp(6), fontWeight: '600', width: wp(55),  }}>
                {name}
            </Text>*/}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#21262E',
        borderWidth: 1,
        borderRadius: 11,
        padding: 7,
        margin: 10,
        alignItems: 'center',
        width: 35
    },
})
export default HeaderGoBackStack;