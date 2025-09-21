import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from '../firebase/firebaseConfig'; // Assuming you have your firebase config set up 

const Profile = () => {
  //setting the useState constants
  const [name, setName] = useState("");
  const [Country, setCountry] = useState("");

  //function for providing the changePassword Functionality

  const changePassword = () => {
      const auth = getAuth();
      auth.sendPasswordResetEmail(auth.currentUser.email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        alert(error);
      });
  };

  //add a useEffect hook , to have the firestore data

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
       setName(user.email);
    });
    return unsubscribe;
  }, []);

  const Spacing = 10;

const Logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.editButton}></TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image source={require("../../assets/svg.jpg")} style={styles.avatar} />
        <Text style={styles.name}>
          {name.firstName} {name.lastName}
        </Text>
        <Text style={styles.username}>@StyleScape</Text>
        <Text style={styles.bio}>
          Welcome to the Top Shopping Brand | FASHION_WORLD
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={29} color={COLORS.gray} />
            <Text style={styles.infoLabel}>{name.email}</Text>
          </View>
          
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => Logout()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changePassword()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingTop: 20,
  },
  editButton: {
    padding: 25,
  },
  profileContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  username: {
    color: COLORS.gray,
    fontSize: 16,
    marginBottom: 10,
  },
  bio: {
    textAlign: "center",
    color: COLORS.gray,
    fontSize: 16,
    marginHorizontal: 40,
    marginBottom: 20,
  },
  infoContainer: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoLabel: {
    marginLeft: 10,
    fontSize: 18,
    color: COLORS.black,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
    borderRadius: 10,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Profile;
