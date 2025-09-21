import { View, Text, Pressable, StatusBar } from "react-native";
import React, { useState } from "react";
import CardNumberTextInput from "../../components/CreditCard/CardNumberTextInput";
import CardDateTextInput from "../../components/CreditCard/CardDateTextInput";
import CardNameTextInput from "../../components/CreditCard/CardNameTextInput";
import CardCVCTextInput from "../../components/CreditCard/CardCVCTextInput";
import { TouchableOpacity } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import Button from "../../components/Button/Button";
import { ScrollView } from "react-native-gesture-handler";
import ScanCard from "../../components/CreditCard/ScanCard";
/** import tailwind */
import tw from 'twrnc';

const CreditCardDetails = ({ route, navigation }) => {
  const item = route.params.item;

  const [cardNameValue, setCardNameValue] = useState("");
  const [focusCardNameNum, setFocusCardNameNum] = useState(false);

  const [cardValue, setCardValue] = useState("");
  const [focusCardNum, setFocusCardNum] = useState(false);

  const [cardDateValue, setCardDateValue] = useState("");
  const [focusCardDateNum, setFocusCardDateNum] = useState(false);

  const [cardCVCValue, setCardCVCValue] = useState("");
  const [focusCardCVCNum, setFocusCardCVCNum] = useState(false);

  const updateCardName = (cardNum) => {
    setCardNameValue(cardNum);
  };

  const updateText = (cardNum) => {
    setCardValue(cardNum);
  };
  const updateCardDate = (cardNum) => {
    setCardDateValue(cardNum);
  };
  const updateCardCVC = (cardNum) => {
    setCardCVCValue(cardNum);
  };
  const items = {
    cardName: cardNameValue,
    cardNumber: cardValue,
    expDate: cardDateValue,
    cardCVC: cardCVCValue,
  };

  const [cardError, setCardError] = useState(null);

  const SaveCardDetails = () => {
    if (
      !cardNameValue.length ||
      !cardValue.length ||
      !cardDateValue.length ||
      !cardCVCValue.length
    ) {
      setCardError("Required");

      setTimeout(() => {
        setCardError(null);
      }, 3000);
    } else navigation.navigate("checkout", { items, item });
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
        <View style={tw`px-6 mb-8`}>
          <Text style={tw`text-3xl font-bold my-5`}>Credit/Debit card</Text>
          <ScanCard />
          <CardNameTextInput
            errorColor={"red"}
            cardError={cardError}
            placeholder={"Name"}
            label={"Name on card"}
            focus={focusCardNameNum}
            defaultBorderColor={"#ddd"}
            focusColor={"#0BCE83"}
            touched={true}
            updateName={(t) => {
              updateCardName(t);
            }}
            onFocus={() => {
              setFocusCardNameNum(true);
              setFocusCardNum(false);
              setFocusCardDateNum(false);
              setFocusCardCVCNum(false);
            }}
            placeholderTextColor={"#ccc"}
            value={cardNameValue}
            defaultValue={cardNameValue}
          />
          <CardNumberTextInput
            errorColor={"red"}
            cardErrorr={cardError}
            focusColor={"#0BCE83"}
            defaultBorderColor={"#ddd"}
            placeholder={"Card number"}
            label={"Card Number"}
            focus={focusCardNum}
            touched={true}
            updateTextVal={(t) => {
              updateText(t);
            }}
            onFocus={() => {
              setFocusCardNum(true);
              setFocusCardNameNum(false);
              setFocusCardDateNum(false);
              setFocusCardCVCNum(false);
            }}
            placeholderTextColor={"#ccc"}
            value={cardValue}
            defaultValue={cardValue}
          />
          <View style={tw`flex-row justify-between  w-full`}>
            <CardDateTextInput
              errorColor={"red"}
              cardError={cardError}
              focusColor={"#0BCE83"}
              defaultBorderColor={"#ddd"}
              placeholder={"MM/YY"}
              label={"Expiry date"}
              focus={focusCardDateNum}
              touched={true}
              updateDate={(t) => {
                updateCardDate(t);
              }}
              onFocus={() => {
                setFocusCardDateNum(true);
                setFocusCardNum(false);
                setFocusCardNameNum(false);
                setFocusCardCVCNum(false);
              }}
              placeholderTextColor={"#ccc"}
              value={cardDateValue}
              defaultValue={cardDateValue}
            />
            <CardCVCTextInput
              errorColor={"red"}
              cardError={cardError}
              focusColor={"#0BCE83"}
              defaultBorderColor={"#ddd"}
              placeholder={"CVC"}
              label={"CVC"}
              focus={focusCardCVCNum}
              touched={true}
              updateCVC={(t) => {
                updateCardCVC(t);
              }}
              onFocus={() => {
                setFocusCardCVCNum(true);
                setFocusCardDateNum(false);
                setFocusCardNum(false);
                setFocusCardNameNum(false);
              }}
              placeholderTextColor={"#ccc"}
              value={cardCVCValue}
              defaultValue={cardCVCValue}
            />
          </View>
          <Pressable onPress={SaveCardDetails} style={tw`mt-20`}>
            <Button title="USE THIS CARD" />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreditCardDetails;
