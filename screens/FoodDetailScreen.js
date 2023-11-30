import { StyleSheet, Text, ScrollView,Image,View,Pressable } from 'react-native'
import { FOODS } from '../data/dummy-data';
import React,{useLayoutEffect,useContext} from 'react'
import FootIng from '../components/FootIng';
import { FontAwesome } from '@expo/vector-icons'; 
import { FavoriteContext } from '../store/favoriteContext';

export default function FoodDetailScreen({route,navigation}) {

    const favoriteFoodContext=useContext(FavoriteContext)
    
    const id=route.params.foodId;
    const selectedFood=FOODS.find((food)=>food.id===id)

    const foodIsFav=favoriteFoodContext.ids.includes(id)

    const pressHandler=()=>{
        console.log("tıklandı")
    }

    const changeFavorite=()=>{
        if(foodIsFav){
            favoriteFoodContext.removeFavorite(id)
        }else{
            favoriteFoodContext.addFavorite(id)
        }
    }

    useLayoutEffect (()=>{
        
        navigation.setOptions({  //navigationı props olarak yolla!
        title:selectedFood.title,
        headerRight:()=>{
            return(
                <Pressable onPress={pressHandler} 
                    style={({pressed})=>(pressed ? styles.pressed : null)}
                >
                    <FontAwesome name={foodIsFav ? "star" : "star-o"} size={24} color="black"
                        onPress={changeFavorite}
                    />
                </Pressable>
            )
        }
      })
  
      },[navigation,changeFavorite]) 

  return (
    <ScrollView  style={styles.container}>
      <Image  style={styles.img} source={{uri:selectedFood.imageUrl}}/>
      <Text  style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity} </Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
    
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>İçindekiler</Text>
        </View>
        <FootIng data={selectedFood.ingredients}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:23,
        textAlign:"center",
        fontWeight:"bold",
        marginTop:5,
        textTransform:"capitalize"
    },
    img:{
        width:"100%",
        height:300,
    },
    details:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:5,
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12,
        color:"red",
        textTransform:"capitalize",
    },
    listContainer:{
        width:"100%",
        paddingHorizontal:10,
    },
    subtitleContainer:{
        borderBottomWidth:2,
        borderBottomColor:"orange",
        alignItems:"center"
    },
    subtitle:{
        fontSize:22,
        color:"orange",
        fontWeight:"bold",
        textTransform:"capitalize",
    },
    pressed:{
        opacity:0.7,
        color:"orange",
    }

})