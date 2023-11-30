import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import CtgGrid from '../components/CtgGrid';

export default function CategoryScreens({navigation}) {

    const renderCtg=(itemData)=>{
        //console.log(itemData.item) //gelen İtemData nın içinde item nesnesi var o yüzden tekrar item a gittik
                                     //bu item ın içinde color,id,title tutuluyor.
        
        function pressHandler(){
            navigation.navigate("FoodInfo",{
                categoryId: itemData.item.id,  //foodInfo sayfasına categoryId yi yolladık
            }) //foodınfo sayfasına yönlendir
        }
         return(
            <CtgGrid title={itemData.item.title} color={itemData.item.color} pressFood={pressHandler}/>
        )
    }

  return (
    <FlatList
        data={CATEGORIES}
        keyExtractor={(item)=>item.id}
        renderItem={renderCtg}
        numColumns={2}
    >
    </FlatList>
  )
}

const styles = StyleSheet.create({})