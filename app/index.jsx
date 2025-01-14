import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import AnasPic from "../../assets/images/anasraza.png";
import { Link } from "expo-router";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={AnasPic}>
      </ImageBackground>
        <Text style={styles.text}>Raza Tech Tube</Text>

        <Link href="/contact" asChild>
          <Text>Contact Us</Text>
        </Link>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:"center",
    justifyContent:"center"

  },
  text: {
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
  
    fontWeight: "bold",
    textAlign:"center"
  },
});
