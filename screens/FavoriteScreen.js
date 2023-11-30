import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import FoodList from '../components/FoodList'
import { FOODS } from '../data/dummy-data'
import { FavoriteContext } from '../store/favoriteContext'

export default function FavoriteScreen() {

  const favoriteFoodContext=useContext(FavoriteContext);

  const favFoods=FOODS.filter((food)=>
      favoriteFoodContext.ids.includes(food.id)
  )

  if (favFoods.length === 0){
    return(
      <View>
        <Text>Favori ürününüz bulunmamaktadır</Text>
      </View>
    )
  }
  return (
      <FoodList items={favFoods}/>
  )
}

const styles = StyleSheet.create({})