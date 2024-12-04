import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, Image, ScrollView, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, SafeAreaView } from "react-native";


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
  { wallpaper: "https://ideogram.ai/assets/progressive-image/balanced/response/R56D8ZTsTsaxVQCKv3Ww1w", name:"Hanuman",icon: "icon15.png" },
];

const Tab = createMaterialTopTabNavigator();
//{tabBarStyle:{backgroundColor:'#292929'},tabBarLabelStyle:{color:'white'},tabBarIndicatorStyle:{backgroundColor:'red',height:6},}

export default function MyTabs() {
  
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{backgroundColor:'#292929'},tabBarLabelStyle:{color:'white',fontSize:16},tabBarIndicatorStyle:{backgroundColor:'red',height:6}}}>
      <Tab.Screen name="Suggested" component={ProfileScreen} />
      <Tab.Screen name="Liked" component={ExploreScreen} />
      <Tab.Screen name="Library" component={HomeScreen} />
    </Tab.Navigator>
  );
}
function HomeScreen() {
  return <SafeAreaView style={{backgroundColor:'black',flexGrow:1}}>
  <ScrollView>
  <View style={{gap:40,marginTop:80,marginBottom:30}}>
    <Text style={{color:"white",textAlign:'center', fontSize:20}}>No purchses found</Text>
    <View>
    <Entypo name="progress-empty" size={80} color="red" style={{textAlign:'center'}}/>
    <Ionicons name="reorder-two-outline" size={85} color="red" style={{textAlign:'center',marginTop:-45}}/>
    </View>
    <Text style={{color:'white',textAlign:'center',fontSize:15}}>(purchased collections will appear here)</Text>
    <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign:'center',marginTop:15}}>Suggestions for you</Text>
  </View>
  <FlatList
        data={wallpapers} numColumns={2}
        keyExtractor={(item, index) => `list1-${index}`}
        renderItem={({ item }) => (
          <Pressable
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
              style={{ height: 200, width: 196, borderRadius: 10 }}
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
      </ScrollView>
</SafeAreaView>
}
function ExploreScreen() {
  return <SafeAreaView style={{backgroundColor:'black',flexGrow:1}}>
    <ScrollView>
    <View style={{gap:40,marginTop:80,marginBottom:30}}>
      <Text style={{color:"white",textAlign:'center', fontSize:20}}>No favourites found</Text>
      <AntDesign name="heart" size={60} color="red" style={{textAlign:'center'}}/>
      <Text style={{color:'white',textAlign:'center',fontSize:15}}>(wallpapers you "like" will appear here)</Text>
      <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign:'center',marginTop:15}}>Suggestions for you</Text>
    </View>
    <FlatList
          data={wallpapers} numColumns={2}
          keyExtractor={(item, index) => `list1-${index}`}
          renderItem={({ item }) => (
            <Pressable
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
                style={{ height: 200, width: 196, borderRadius: 10 }}
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
        </ScrollView>
  </SafeAreaView>
}
function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#292929",padding:5}}>
        
        <FlatList
          data={wallpapers} numColumns={2}
          keyExtractor={(item, index) => `list1-${index}`}
          renderItem={({ item }) => (
            <Pressable
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
                style={{ height: 200, width: 191, borderRadius: 10 }}
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
    </SafeAreaView>
  );
}
