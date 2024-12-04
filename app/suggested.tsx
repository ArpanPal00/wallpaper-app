import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { FlatList, SafeAreaView, Text, View, Image } from "react-native";
const wallpapers = [
    { wallpaper: "https://th.bing.com/th/id/R.b1964c61543ae38d81718c4be1e11aba?rik=34%2blGe84m4rLhg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fe%2f4%2f0%2f35330.jpg&ehk=MikHBHpzQmNCgPt7WIoKlHM0ggW64b79ukYUdyp1aWo%3d&risl=&pid=ImgRaw&r=0", name: "Nature Bliss", icon: "icon1.png" },
    { wallpaper: "wallpaper2.jpg", name: "Urban Vibes", icon: "icon2.png" },
    { wallpaper: "wallpaper3.jpg", name: "Mountain Majesty", icon: "icon3.png" },
    { wallpaper: "wallpaper4.jpg", name: "Ocean View", icon: "icon4.png" },
    { wallpaper: "wallpaper5.jpg", name: "Serene Sunset", icon: "icon5.png" },
    { wallpaper: "wallpaper6.jpg", name: "Galaxy Glow", icon: "icon6.png" },
    { wallpaper: "wallpaper7.jpg", name: "Abstract Art", icon: "icon7.png" },
    { wallpaper: "wallpaper8.jpg", name: "Minimalist Design", icon: "icon8.png" },
    { wallpaper: "wallpaper9.jpg", name: "Nature Escape", icon: "icon9.png" },
    { wallpaper: "wallpaper10.jpg", name: "City Skyline", icon: "icon10.png" },
    { wallpaper: "wallpaper11.jpg", name: "Forest Walk", icon: "icon11.png" },
    { wallpaper: "wallpaper12.jpg", name: "Snowy Peaks", icon: "icon12.png" },
    { wallpaper: "wallpaper13.jpg", name: "Sunny Meadow", icon: "icon13.png" },
    { wallpaper: "wallpaper14.jpg", name: "Starry Night", icon: "icon14.png" },
    { wallpaper: "wallpaper15.jpg", name: "Golden Hour", icon: "icon15.png" },
  ];
  

export default function Suggested() {
    return <SafeAreaView>
        <FlatList data={wallpapers} renderItem={({item})=><View style={{width:200,height:200}}><Image source={{uri:'https://th.bing.com/th/id/R.b1964c61543ae38d81718c4be1e11aba?rik=34%2blGe84m4rLhg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fe%2f4%2f0%2f35330.jpg&ehk=MikHBHpzQmNCgPt7WIoKlHM0ggW64b79ukYUdyp1aWo%3d&risl=&pid=ImgRaw&r=0'}}/><View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}><Text>{item.name}</Text><AntDesign name="hearto" size={24} color="black" /></View></View>}/>
    </SafeAreaView>
}