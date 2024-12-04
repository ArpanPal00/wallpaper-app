import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import AntDesign from '@expo/vector-icons/AntDesign';
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

const DownloadPicture = ({onClose}: {
  onClose: () => void;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


  /*{wallpapers.map((item, index) => (
    <View key={index} style={styles.wallpaperItem}>
      <Image source={{ uri: item.wallpaper }} style={styles.wallpaperImage} />
      <Text style={styles.wallpaperName}>{item.name}</Text>
    </View>
  ))}*/

  // renders
  return (
      <BottomSheet
      onClose={onClose}
      snapPoints={["99%"]}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{height:0}}
        handleStyle={{display:'none'}}
      >
        <BottomSheetView style={styles.contentContainer}>
        <Image style={{height:'60%', width:'100%', borderRadius:10}} source={{uri: wallpapers[9].wallpaper}}/>
        <AntDesign name="close" size={28} color="white" style={{position:'relative',top:-440,left:-185}}/>
        <View style={{flexDirection:'row',gap:10,position:'relative',left:160,top:-470}}><AntDesign name="hearto" size={28} color="white" /><AntDesign name="sharealt" size={28} color="white" /></View>
        <Text style={{fontSize:40,fontWeight:'600',color:'white',marginTop:-40}}>{wallpapers[9].name}</Text>
        <Pressable style={{backgroundColor:'white', borderRadius:8, width:'85%',height:60,justifyContent:'center',flexDirection:'row',gap:10,alignItems:'center',marginTop:20}}><AntDesign name="picture" size={28} color="black" style={{textAlign:'center'}}/><Text style={{color:'black',fontWeight:'800',fontSize:18}}>Get Wallpaper</Text></Pressable>
        </BottomSheetView>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  wallpapersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  wallpaperItem: {
    margin: 10,
    alignItems: 'center',
    width:'100%'
  },
  wallpaperImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  wallpaperName: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default DownloadPicture;