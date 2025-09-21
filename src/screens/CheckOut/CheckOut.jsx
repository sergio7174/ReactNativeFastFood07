import {
  Image,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Pressable,
  ToastAndroid,
} from "react-native";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "react-native-vector-icons";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import FlexDisplay from "../../components/FlexDisplay/FlexDisplay";
import { useDispatch } from "react-redux";
import { addOrder } from "../../redux/Features/Order/OrderSlice";
import { deleteItem } from "../../redux/Features/Cart/CartSlice";
import moment from "moment/moment";
import { PaymentIcon } from "../../../assets/PaymentIcons";
import {
  Amex,
  Maestro,
  Mastercard,
  Paypal,
  Visa,
} from "../../../assets/PaymentIcons/components";
import { checkCreditCard } from "../../components/CreditCard/ValidateCard";
/** import tailwind */
import tw from 'twrnc';
import HeaderGoBackStack from "../../components/HeaderGoBackStack"; ;

const CheckOut = ({ route, navigation }) => {
  const item = route.params.item;
  const data = route.params.items;
  const dispatch = useDispatch();

  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    var date = moment().utcOffset("").format(" DD/MMM/YYYY");
    var time = moment().utcOffset("").format(" HH:mm");

    setCurrentDate(date);
    setCurrentTime(time);
  }, []);

  const HandleOrder = () => {
    if (!data) {
      ToastAndroid.show(
        "Please provide some payment method.",
        ToastAndroid.SHORT
      );
    } else {
      dispatch(
        addOrder({
          image: item.image,
          name: item.name,
          description: item.description,
          price: item.price,
          count: item.count,
          id: item.id,
          date: currentDate,
          time: currentTime,
        })
      );
      dispatch(deleteItem(item.id));
      navigation.navigate("ordersuccess");
    }
  };

  var cardNum = data ? data.cardNumber : "None";
  var replaced = data ? cardNum.replace(/.(?=.{5,}$)/g, "*") : cardNum;

  const [iconName, setIconName] = useState(<Paypal />);

  useEffect(() => {
    checkCard(cardNum);
  }, [cardNum]);

  const checkCard = (cardNum) => {
    const { type } = checkCreditCard(cardNum);
    if (type === null) {
      setIconName();
    } else if (type === "MasterCard") {
      setIconName(<Mastercard />);
    } else if (type === "AmEx") {
      setIconName(<Amex />);
    } else if (type === "Visa") {
      setIconName(<Visa />);
    } else if (type === "Discover") {
      setIconName(<Discover />);
    } else if (type === "VisaElectron") {
      setIconName();
    } else if (type === "Maestro") {
      setIconName(<Maestro />);
    } else if (type === "Solo") {
      setIconName();
    } else {
      setIconName();
    }
  };

  const userDetailsInfo = [
    {
      name: "Payment method",
      details: [
        {
          text: replaced,
          icon: Feather,
          iconName: data ? null : "credit-card",
        },
        {
          text: data ? "Pay on delivery" : "None",
          icon: FontAwesome,
          iconName: "money",
        },
        {
          text: data ? "Credit Card" : "None",
          icon: Feather,
          iconName: "credit-card",
        },
      ],
    },
    {
      name: "Delivery address",
      details: [
        {
          text: {
            name: "John Doe",
            adrress: "Cesu31k-25.st, S/A Chili",
            street: "LV-1012",
            streetName: "Latvia",
          },
          icon: MaterialIcons,
          iconName: "directions-walk",
        },
      ],
    },
    {
      name: "Delivery options",
      details: [
        {
          text: "I'll pick up myself",
          icon: MaterialIcons,
          iconName: "directions-walk",
        },
        {
          text: "By courier",
          icon: MaterialIcons,
          iconName: "directions-bike",
        },
        {
          text: "By drone",
          icon: MaterialCommunityIcons,
          iconName: "drone",
        },
      ],
    },
  ];

  const Card = ({ heading, children, ...props }) => {
    return (
      <View {...props}>
         <HeaderGoBackStack/>
        <FlexDisplay>
          <Text  style={tw`text-black text-lg font-bold`}>{heading}</Text>
          <TouchableOpacity>
            <Text
              onPress={() =>
                heading == "Payment method"
                  ? navigation.navigate("creditcard", { item })
                  : null
              }
               style={tw`text-purple-700 font-semibold`}
            >
              {heading == "Payment method"
                ? data
                  ? "CHANGE"
                  : "ADD"
                : "CHANGE"}
            </Text>
          </TouchableOpacity>
        </FlexDisplay>
        {children}
      </View>
    );
  };

  const convertObjectKeysToArray = (obj) => {
    var keys = [];
    for (let key of Object.keys(obj)) {
      keys.push(key);
    }
    return keys;
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon
            style={{ paddingLeft: 24, marginTop: 20, marginLeft: 20 }}
            color="black"
            size={28}
          />
        </TouchableOpacity>
        <View  style={tw`px-6 mb-8`}>
          <View  style={tw`flex-row items-center p-2 bg-white rounded-xl mt-6 mb-4`}>
            <Image  style={tw`h-16 w-[20%] rounded-lg`} source={item.image} />
            <View  style={tw`flex-1 ml-4`}>
              <Text  style={tw`font-bold text-lg`}>{item.name}</Text>
              <Text  style={tw`text-gray-500 font-[500]`}>
                {item.description}
              </Text>
              <Text  style={tw`font-semibold`}>
                {item.count} item ~ {item.price}
              </Text>
            </View>
          </View>

          <View  style={tw`space-y-10 mt-5`}>
            {userDetailsInfo.map((info, i) => (
              <Card heading={info.name} key={i}>
                <View  style={tw`space-y-4 mt-6`}>
                  {info.details.map((det, i) => (
                    <FlexDisplay key={i}>
                      <FlexDisplay key={i}>
                        <View
                          style={tw`
                            det.iconName === null
                              ? "flex-row gap-[10px]"
                              : "flex-row gap-5"
                         `}
                        >
                          {det.iconName === null ? iconName : null}
                          <det.icon
                            name={det.iconName}
                            size={20}
                            color="black"
                          />
                          {typeof det.text === "string" && (
                            <TouchableOpacity>
                              <Text>{det.text}</Text>
                            </TouchableOpacity>
                          )}
                          {typeof det.text !== "string" && (
                            <View  style={tw`space-y-3`}>
                              {convertObjectKeysToArray(det.text).map(
                                (el, i) => (
                                  <Text key={i}>{det.text[`${el}`]}</Text>
                                )
                              )}
                            </View>
                          )}
                        </View>
                        {data ? (
                          <>
                            {i === 0 && typeof det.text === "string" && (
                              <AntDesign name="check" size={22} color="black" />
                            )}
                          </>
                        ) : null}
                      </FlexDisplay>
                    </FlexDisplay>
                  ))}
                </View>
              </Card>
            ))}
          </View>

          <View  style={tw`flex flex-row justify-between items-center px-2 mt-6`}>
            <Text  style={tw`text-black text-lg font-bold`}>
              Non-contact-delivery
            </Text>
            <Switch />
          </View>
        </View>

        <View  style={tw`bg-white rounded-t-[50px] px-6 space-y-3`}>
          <View  style={tw`items-center`}>
            <View  style={tw`border-t-[4px] w-14 border-t-gray-200`} />
          </View>
          <View  style={tw`flex flex-row justify-between items-center pt-4`}>
            <View  style={tw`flex-row items-center gap-2 `}>
              <Text  style={tw`text-base font-medium`}>Subtotal</Text>
              <AntDesign name="questioncircle" size={15} color="black" />
            </View>
            <Text  style={tw`text-base font-medium`}>{item.price}</Text>
          </View>
          <View  style={tw`flex flex-row justify-between items-center pb-4 border-b border-b-gray-200`}>
            <Text  style={tw`text-base font-medium`}>
              Estimated Delivery & Handling
            </Text>
            <Text  style={tw`text-base font-medium`}>Free</Text>
          </View>
          <View  style={tw`flex flex-row justify-between items-center mb-6`}>
            <Text  style={tw`text-xl font-semibold `}>Total</Text>
            <Text  style={tw`text-xl text-primaryColor font-semibold`}>
              {item.price}
            </Text>
          </View>
          <Pressable onPress={HandleOrder}  style={tw`my-3`}>
            <Button title="PLACE ORDER" />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckOut;
