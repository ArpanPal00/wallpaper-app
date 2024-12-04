import DownloadPicture from "@/components/BottomSheet";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, SafeAreaView, Button, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function account() {

    const [selectedTheme, setSelectedTheme] = useState('System');
    const [selectedIcon, setSelectedIcon] = useState('https://ideogram.ai/assets/progressive-image/balanced/response/-k8qZTUfTVm7sDbqKqWldg');
    const themes = ['System','Light','Dark']
    const icons = ['https://ideogram.ai/assets/progressive-image/balanced/response/-k8qZTUfTVm7sDbqKqWldg','https://ideogram.ai/assets/progressive-image/balanced/response/4Rh7eyPqTqClnwj9OMLI1Q','https://ideogram.ai/assets/progressive-image/balanced/response/JqyngdjQSmSa29kSaCWyaw','https://ideogram.ai/assets/progressive-image/balanced/response/b4ZSWbBRT6KNLskdEcam0w']
    return <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
        <View style={{paddingLeft:20,paddingTop:10}}>
        <Text style={{fontWeight:'800',fontSize:30,color:'white',marginBottom:10}}>Panels</Text>
        <Text style={{color:'#444744'}}>Member since 11/25/2024</Text>
        </View>


        <ScrollView style={{flex:1}}>
        <View style={{backgroundColor:'#292929', width:'90%',height:170,borderRadius:10,marginLeft:20,marginTop:40}}>
            <Image style={{height:100,width:100,borderRadius:50,marginTop:33,marginLeft:20}} source={{uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/EiVib9JVQcybG4UyMx931g'}}/>
            <Text style={{marginLeft:134,marginTop:-60,color:'#7E7E7C'}}>jackknightonline751@gmail.com</Text>
        </View>
        <Text style={{fontSize:30,fontWeight:'800',color:'white',marginLeft:20,marginTop:30}}>Settings</Text>
        <Text style={{fontSize:15,color:'white',margin:20}}>Theme</Text>

        <View style={styles.themeOptions}>
        {themes.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedTheme(item)}
            style={[
              styles.themeButton,
              selectedTheme === item && styles.selectedThemeButton,
            ]}
          >
            <Text
              style={[
                styles.themeText,
                selectedTheme === item && styles.selectedThemeText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{margin:20,fontSize:15,color:'white'}}>App Icon</Text>


      <View style={{flexDirection:'row',height:95,width:90,marginLeft:13}}>
        {icons.map((item , index) => (
            <TouchableOpacity key={index}
            onPress={() => setSelectedIcon(item)}
            style={[
              styles.IconButton,
              selectedIcon === item && styles.selectedIconButton,
            ]}>
                <Image style={{height:70,width:70,borderRadius:10}} source={{uri: item}}/>

            </TouchableOpacity>
        ))}
      </View>


      <View style={{width:'100%',marginTop:20}}>
        <Text style={{color:'#7E7E7C',textAlign:'center'}}>Panels 2024,</Text>
        <Text style={{color:'#7E7E7C',textAlign:'center'}}>Panels Wallpaper Mobile App LLC.</Text>
      </View>


      <View style={{marginTop:50,marginLeft:20}}>
        <Text style={{color:'white',fontSize:30,fontWeight:'800', marginBottom:60}}>About</Text>
        <Text style={{color:'white', fontSize:15, marginBottom:50}}>Account</Text>
        <Text style={{color:'white', fontSize:15, marginBottom:50}}>Privacy Policy</Text>
        <Text style={{color:'white', fontSize:15, marginBottom:50}}>Terms of Service</Text>
        <Text style={{color:'white', fontSize:15, marginBottom:50}}>Licenses</Text>
        <Text style={{color:'white', fontSize:15, marginBottom:50}}>Version 1.3.1</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
}
const styles = StyleSheet.create({
    
    themeOptions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal: 20,
    },
    themeButton: {
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 8,
      backgroundColor: 'transparent',
      borderWidth:1,
      borderColor:'#444744',
    },
    IconButton: {
        borderRadius: 15,
        margin:10,
        backgroundColor: 'transparent',
        borderWidth:3,
      },

    selectedThemeButton: {
      backgroundColor: 'white',
    },
    selectedIconButton: {
        borderColor:'white'
      },
    themeText: {
      color: 'white',
      fontSize: 16,
      fontWeight:'800'
    },
    selectedThemeText: {
      color: 'black',
      fontWeight: '700',
    },
  });
  