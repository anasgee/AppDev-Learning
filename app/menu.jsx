import { Appearance, StyleSheet,Platform,SafeAreaView, ScrollView,View,Text,Image } from "react-native";

import { Colors } from "@/constants/Colors";
import { FlatList } from "react-native-gesture-handler";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MenuImages from "@/constants/MenuImages";

export default function MenuScreen(){
    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

    const styles = createStyle(theme,colorScheme)
    const separatorComp = <View style={styles.separator}/>
    const headerComp = <Text>Top Of the list</Text>
    const footerComp = <Text>End Of the Menu</Text>

    return(
        <Container>
            <FlatList
            contentContainerStyle={styles.contentContainer}
            data = {MENU_ITEMS}
            ItemSeparatorComponent={separatorComp}
            // ListHeaderComponent={headerComp}
            ListFooterComponent={footerComp}
            ListFooterComponentStyle={styles.footerComp}
            // ListHeaderComponentStyle={""}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=>item.id.toString()}   
            ListEmptyComponent={<Text>No Items here</Text>}
            renderItem={({item})=>(
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={styles.menuItemTitle}>{item.title} </Text>
                            <Text style={styles.menuItemText}>{item.description} </Text>
                        </View>
                        <Image style={styles.img} source={MenuImages[item.id -1]}/>
                    </View>
            )}/>
        </Container>
    )

}


function createStyle(theme,colorScheme){
 return StyleSheet.create({
            contentContainer:{
                paddingTop:10,
                paddingBottom:20,
                paddingHorizontal:12,
                backgroundColor:theme.background
            },
            separator:{
                height:1,
                backgroundColor:colorScheme==="dark" ? "papayawhip":"#000",
                width:'50%',
                maxWidth:300,
                marginHorizontal:'auto',
                marginBottom:10
                        },
                        footerComp:{
                            marginHorizontal:'auto'
            },
            img:{
                width:300,
                height:300
            },
            row:{
                flexDirection:'row',
                width:'100%',
                maxWidth:600,
                height:100,
                marginBottom:10,
                borderStyle:'solid',
                borderColor:colorScheme==='dark' ? 'papayawhip':'#000',
                borderWidth:1,
                borderRadius:20,
                overflow:'hidden',
                marginHorizontal:'auto'
            },
            menuTextRow:{
                width:'65%',
                paddingTop:10,
                paddingLeft:10,
                paddingRight:5,
                flexGrow:1,
            },
            menuItemTitle:{
                fontSize:18,
                textDecorationLine:'underline',
            
            },
            menuItemText:{
                color:theme.text
            }

 })
}