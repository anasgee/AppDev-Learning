import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import React from "react";
import AnasPic from "@/assets/images/anasraza.png"
import { Link } from "expo-router";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={AnasPic}>
      </ImageBackground>
        <Text style={styles.text}>Raza Tech Tube</Text>

        <Link href="/contact" asChild>
          <Pressable style={styles.button}>
          <Text>Contact Us</Text>
          </Pressable>

        </Link>
          <Pressable onPress={()=>alert("Button Pressed")} onPressIn={()=>alert("Button Press in in in")} onPressOut={()=>alert("Button Presses Out Out Out")}>
            Press Me
          </Pressable>
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
  button:{
    color:"white",
    fontSize:20,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"green",
    borderRadius:30,

  }
});
