import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import CategoryScreens from './screens/CategoryScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodInfoScreen from './screens/FoodInfoScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { FontAwesome } from '@expo/vector-icons'; 
import FavoriteContextProvider from './store/favoriteContext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation(){
  return(
    <Drawer.Navigator
      screenOptions={{
        headerStyle:{backgroundColor:"blue"},
        headerTintColor:"white"
      }}
    >
      <Drawer.Screen name="Categories" component={CategoryScreens} 
        options={{
          title:"Tüm Kategoriler"
        }}
      />
      <Drawer.Screen name="Favorite" component={FavoriteScreen} 
        options={{
          title:"Favoriler",
          drawerIcon:()=>(
            <FontAwesome name="star-o" size={24} color="black" />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <FavoriteContextProvider>
      <Stack.Navigator 
        // screenOptions={{headerStyle:{backgroundColor:"pink"}}} //bu şekilde stillendirme yapılarbilir
        //contentStyle dersek content i stillendirir
      >
        {/* <Stack.Screen name="Categories" component={CategoryScreens} options={{title:"Tüm Kategoriler"}} /> */}
        <Stack.Screen name="Drawer" component={DrawerNavigation} options={{headerShown:false}} />
        {/* Stackscreen ile drawer screen bu projede birlikte olduğu için drawerscreeni de bir stackscreene yukarıdaki gibi ekliyoruz */}
        <Stack.Screen name="FoodInfo" component={FoodInfoScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
      </Stack.Navigator>
      </FavoriteContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
