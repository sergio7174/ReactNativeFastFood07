import {
  Text,
  StatusBar,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import {
  ChevronDownIcon,
  MapPinIcon,
  BellAlertIcon,
} from "react-native-heroicons/solid";
import { useState } from "react";
import tw from 'twrnc';

import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import PopularCard from "../../../components/PopularCard/PopularCard";

import { mockGrillBurger, dataBurger } from "../../../_DB/BurgerProducts";
import HeaderGoBackStack from "../../../components/HeaderGoBackStack" ;


const HomeByBurger = ({navigation}) => {

  const [active, setActive] = useState(0);

  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <HeaderGoBackStack/>
      <ScrollView>

        
          <View style={tw`flex-row items-center space-x-2`}>
            <MapPinIcon color="#0BCE83" size={20} />
            <Text style={tw`font-bold text-lg`}>Desert Dew</Text>
            <ChevronDownIcon color="#0BCE83" size={15} />
          </View>
          <TouchableOpacity style={tw`h-10 w-10 bg-white p-1 rounded-xl flex-row items-center justify-center`}>
            <BellAlertIcon size={24} color="gray" />
          </TouchableOpacity>
     

        <View style={tw`px-6`}>
          <Text style={tw`text-center font-black text-3xl text-black py-10`}>
            What do you want for{" "}
            <Text style={tw`text-primaryColor`}>Dinner</Text>
          </Text>
        </View>

        <View>
          <Text style={tw`font-black text-lg px-6  py-5`}>Category</Text>

        
         <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 16, paddingHorizontal: 26, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',flexWrap:'wrap', width:'100%' }}
          >
            {dataBurger.map((item, index) => (
              <CategoryCard
                data={item}
                key={index}
                active={active}
                index={index}
                pressFunction={() => setActive(index)}
              />
            ))}
          </ScrollView>
      
          
    </View>
      

        <View style={tw`mt-8 px-6 pb-8`}>
          <Text style={tw`font-black text-lg mb-4`}>Burger</Text>
          {mockGrillBurger.map((grillBurger, index) => (
            <PopularCard data={grillBurger} key={index} />
          ))}
        </View>

      </ScrollView>
    </View>
  );
};

export default HomeByBurger;