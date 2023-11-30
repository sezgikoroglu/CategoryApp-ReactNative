import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FOODS ,CATEGORIES} from '../data/dummy-data'
import FoodItem from '../components/FoodItem'
import FoodList from '../components/FoodList'

export default function FoodInfoScreen({route, navigation}) { //route destruction ı ile yolladğımız categoryId yi burda yakalıcaz
    const ctgId=route.params.categoryId           //gönderilen categoryid route daki paramsın içinde gelir
 
    const displayFoods=FOODS.filter((foodItem)=>{
        return foodItem.categoryIds.indexOf(ctgId) >= 0;
        //categoryId eğer bulunuyorsa index nosunu verir bulunmuyorsa -1 döner
    })

     useLayoutEffect (()=>{
      const ctgTitle=CATEGORIES.find((category)=>
      category.id === ctgId).title;

      navigation.setOptions({
      title:ctgTitle,
    })

    },[navigation,ctgId]) //sayfa geçişi ve ctgId değiştiğinde render olsun

  
    const renderFoodItem=(itemData)=>{
        
        const foodItemProps={
            id:itemData.item.id,
            title:itemData.item.title,
            imageUrl:itemData.item.imageUrl,
            affordability:itemData.item.affordability,
            complexity:itemData.item.complexity,
        }

       return <FoodItem {...foodItemProps}/> //bu şekilde uzun propsları kısaltabiliriz
    }
 
    return (
     <FoodList items= {displayFoods}/>
  )
}

const styles = StyleSheet.create({})