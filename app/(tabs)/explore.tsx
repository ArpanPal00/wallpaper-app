import React, { useState } from "react";
import { Text, SafeAreaView, Image, View, Pressable, FlatList } from "react-native";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DownloadPicture from "@/components/BottomSheet";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomSheet from "@/components/BottomSheet";

const wallpapers = [
    { wallpaper: "https://th.bing.com/th/id/R.b1964c61543ae38d81718c4be1e11aba?rik=34%2blGe84m4rLhg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fe%2f4%2f0%2f35330.jpg&ehk=MikHBHpzQmNCgPt7WIoKlHM0ggW64b79ukYUdyp1aWo%3d&risl=&pid=ImgRaw&r=0", name: "Nature Bliss", icon: "icon1.png" },
    { wallpaper: "https://wallpaperaccess.com/full/324009.jpg", name: "Urban Vibes", icon: "icon2.png" },
    { wallpaper: "https://th.bing.com/th/id/OIP.IIWoDwcMcHiq1CJ-j9SR6wHaEK?rs=1&pid=ImgDetMain", name: "Mountain Majesty", icon: "icon3.png" },
    { wallpaper: "https://th.bing.com/th/id/OIP.-FffO7stumkmTyX7AHa6VQHaEK?rs=1&pid=ImgDetMain", name: "Ocean View", icon: "icon4.png" },
    { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/d5oxk1HsSx2bP99qGcSlLg", name: "Serene Sunset", icon: "icon5.png" },
    { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/xzhWT3owQCqsaf2glct9Iw", name: "Galaxy Glow", icon: "icon6.png" },
    { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/YkXh3zoKSIexHghFV2DV4A", name: "Abstract Art", icon: "icon7.png" },
    { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/PDeSxXKbTra0rxJReM1uEg", name: "Minimalist Design", icon: "icon8.png" },
    { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/4cw6ziKKS1azwOphNnf2RA", name: "Nature Escape", icon: "icon9.png" },
    { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/pZc0FV6XSQqL9VxVa-Lwuw", name: "City Skyline", icon: "icon10.png" },
    { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/HfyYBVXVTnio3Pau-zSj5w", name: "Forest Walk", icon: "icon11.png" },
    { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/NqXOBtkJR0y2d3mQIRTenQ", name: "Snowy Peaks", icon: "icon12.png" },
    { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/8KHmrDZOTvqZ2lw16sKOrw", name: "Sunny Meadow", icon: "icon13.png" },
    { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/mwOsWRi3SSOwMxaRRRV4Kg", name: "Starry Night", icon: "icon14.png" },
    { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/0KKorBYPTgiHYbShA4vRYA", name: "Golden Hour", icon: "icon15.png" },
    { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/R56D8ZTsTsaxVQCKv3Ww1w", name:"Hanuman" ,icon: "icon15.png" },
  ];

export default function explore() {
    const [selectedWallpaper , setSelectedWallpaper] =useState(false)
    return <SafeAreaView style={{flex:1}}>
        <ParallaxScrollView headerBackgroundColor={{dark: 'black', light:'white'}} headerImage={<Image style={{height:400, width:420}} source={{uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/nl4yflcoSAydhP3kRLiM1g'}}/>}>


        <FlatList
        data={wallpapers} numColumns={2}
        keyExtractor={(item, index) => `list1-${index}`}
        renderItem={({ item }) => (
          <Pressable onPress={()=>{setSelectedWallpaper(true)}}
            style={{
              width: 200,
              height: 250,
              margin: 5,
              backgroundColor: "#61605F",
              borderWidth: 0,
              borderRadius: 10,
              flex:1,
            }}
          >
            <Image
              style={{ height: 200, width: 164, borderRadius: 10 }}
              source={{
                uri: item.wallpaper,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 5,
                marginTop:8
              }}
            >
              <Text style={{ color: "white" }}>{item.name}</Text>
              <AntDesign name="hearto" size={24} color="white" />
            </View>
          </Pressable>
        )}
      />

        </ParallaxScrollView>
        {selectedWallpaper && <DownloadPicture onClose={() => setSelectedWallpaper(false)}/>}
    </SafeAreaView>
}