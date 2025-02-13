import { Appearance, StyleSheet,Platform,SafeAreaView, ScrollView,View,Text,Image } from "react-native";

import { Colors } from "@/constants/Colors";
import { FlatList } from "react-native-gesture-handler";

export default function MenuScreen(){
    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;


    return(
        <Container>
            <FlatList
            data = {[]}
            renderItem={({item})=>{

            }}
        </Container>
    )

}


function createStyle(theme,colorScheme){
 return StyleSheet.create({

 })
}